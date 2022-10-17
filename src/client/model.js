import {useCallback, useEffect, useReducer} from "react";
import storage from "./storageClient.js"
import products from "./products.js";
import recipes from "./recipes.js";

const load = async () => {
    const systems = storage.systems()

    return {systems: systems, products, recipes}
}

const addSystem = (model, name) => {
    storage.addSystem(name)
    return {systems: storage.systems(), products, recipes}
}

const deleteSystem = (model, id) => {
    storage.deleteSystem(id)
    return {systems: storage.systems(), products, recipes}
}

const addPlanet = (model, name, systemId) => {
    storage.addPlanet(systemId, name)
    return {systems: storage.systems(), products, recipes}
}

const deletePlanet = (model, systemId, id) => {
    const system = model.systems.find(s => s.id === systemId)
    storage.deletePlanet(system.id, id)
    return {systems: storage.systems(), products, recipes}
}

const updatePlanet = (model, systemId, planetId, importIds, exportIds) => {
    const system = model.systems.find(s => s.id === systemId)
    const planet = system.planets.find(p => p.id === planetId)
    planet.imports = importIds
    planet.exports = exportIds
    storage.updatePlanet(system.id, planet)
    return {systems: storage.systems(), products, recipes}
}

const updatePlanetRecipes = async (model, systemId, planet, recipes) => {
    const system = model.systems.find(s => s.id === systemId)
    const planetToUpdate = system.planets.find(p => p.id === planet.id)
    planetToUpdate.enabledRecipes = recipes
    storage.updatePlanet(system.id, planetToUpdate)
    return {systems: storage.systems(), products, recipes: model.recipes}
}

const reload = () => {
    return {systems: storage.systems(), products, recipes}
}


const useModel = () => {
    const reducer = (state, action) => {

        switch (action.type) {
            case 'load':
                return action.payload
        }

        return state
    }

    const [model, dispatch] = useReducer(reducer, null)

    const asyncDispatch = useCallback(async (action) => {
        if (!action) return

        switch (action.type) {
            case 'addSystem': {
                const newModel = await addSystem(model, action.payload.name)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'deleteSystem': {
                const newModel = await deleteSystem(model, action.payload.id)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'addPlanet': {
                const newModel = await addPlanet(model, action.payload.name, action.payload.systemId)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'deletePlanet': {
                const newModel = await deletePlanet(model, action.payload.systemId, action.payload.id)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'updatePlanet': {
                const newModel = await updatePlanet(model, action.payload.systemId, action.payload.id, action.payload.importIds, action.payload.exportIds)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'updatePlanetRecipes': {
                const newModel = await updatePlanetRecipes(model, action.payload.systemId, action.payload.planet, action.payload.recipes)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'reload': {
                const newModel = reload(model)
                dispatch({type: 'load', payload: newModel})
                break
            }
        }
    }, [model])


    useEffect(() => {
        load().then(result => dispatch({type: 'load', payload: result}))
    }, [])

    return [model, asyncDispatch]

}


export {useModel}