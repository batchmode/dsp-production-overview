import {useCallback, useEffect, useReducer} from "react";
import storage from "./storageClient.js"
import products from "./products.js";
import rawRecipes from "./recipes.js";

function setIconPositions(recipes, products) {
    return recipes.map(r => {
        r.iconPosition = products.find(p => p.id === r.icon)?.iconPosition || [0, 0]
        return r
    })
}

const recipes = setIconPositions(rawRecipes, products)

const load = () => {
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

const updatePlanetResources = (model, systemId, planetId, resourceIds) => {
    const system = model.systems.find(s => s.id === systemId)
    const planet = system.planets.find(p => p.id  === planetId)
    planet.resources = resourceIds
    storage.updatePlanet(system.id, planet)
    return {systems: storage.systems(), products, recipes}
}

const updatePlanetRecipes = (model, systemId, planet, recipes) => {
    const system = model.systems.find(s => s.id === systemId)
    const planetToUpdate = system.planets.find(p => p.id === planet.id)
    planetToUpdate.enabledRecipes = recipes
    storage.updatePlanet(system.id, planetToUpdate)
    return {systems: storage.systems(), products, recipes: model.recipes}
}

const updateProductionRate = (model, systemId, planetId, productId, rate) => {
    const system = model.systems.find(s => s.id === systemId)
    const planetToUpdate = system.planets.find(p => p.id === planetId)
    const rateToUpdate = planetToUpdate.productionRates.find(r => r.product === productId)
    if(rateToUpdate) {
        rateToUpdate.rate = rate
    } else {
        planetToUpdate.productionRates.push({
            product: productId,
            rate: rate
        })
    }
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

        const payload = action.payload
        switch (action.type) {
            case 'addSystem': {
                const newModel = addSystem(model, payload.name)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'deleteSystem': {
                const newModel = deleteSystem(model, payload.id)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'addPlanet': {
                const newModel = addPlanet(model, payload.name, payload.systemId)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'deletePlanet': {
                const newModel = deletePlanet(model, payload.systemId, payload.id)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'updatePlanet': {
                const newModel = updatePlanet(model, payload.systemId, payload.id, payload.importIds, payload.exportIds)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'updatePlanetResources': {
                const newModel = updatePlanetResources(model, payload.systemId, payload.id, payload.resourceIds)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'updatePlanetRecipes': {
                const newModel = updatePlanetRecipes(model, payload.systemId, payload.planet, payload.recipes)
                dispatch({type: 'load', payload: newModel})
                break
            }
            case 'updateProductionRate': {
                const newModel = updateProductionRate(model, payload.systemId, payload.planetId, payload.productId, payload.rate)
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
        dispatch({type: 'load', payload: load()})
    }, [])

    return [model, asyncDispatch]

}


export {useModel}