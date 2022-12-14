import {dump, parse} from "./migration.js";

const modelKey = import.meta.env.VITE_MODEL_KEY

const StorageClient = class {

    purge() {
        window.localStorage.removeItem(modelKey)
    }

    rawImport(json) {
        window.localStorage.setItem(modelKey, JSON.stringify(json))
    }

    rawExport() {
        return window.localStorage.getItem(modelKey)
    }

    systems(system) {
        if (system) {
            window.localStorage.setItem(modelKey, JSON.stringify(dump(system)))
        } else {
            return parse(JSON.parse(window.localStorage.getItem(modelKey)))
        }
    }

    addSystem(name) {
        const systems = this.systems()
        if (!systems.find(s => s.name === name)) {
            systems.push({id: name, name, planets: []})
            this.systems(systems)
        }
    }

    updateSystem(system) {
        const systems = this.systems().map(s => s.id === system.id ? system : s)
        this.systems(systems)
    }

    deleteSystem(id) {
        const systems = this.systems().filter(s => s.id !== id)
        this.systems(systems)
    }

    addPlanet(systemId, name) {
        const system = this.systems().find(s => s.id === systemId)
        if (!system) return

        if (this.systems().flatMap(s => s.planets).find(p => p.name === name)) {
            return
        }

        system.planets.push({
            id: name,
            name: name,
            resources: [],
            imports: [],
            exports: [],
            enabledRecipes: [],
            productionRates: []
        })
        this.updateSystem(system)
    }

    deletePlanet(systemId, planetId) {
        const system = this.systems().find(s => s.id === systemId)
        if (!system) return
        system.planets = system.planets.filter(p => p.id !== planetId)
        this.updateSystem(system)
    }

    updatePlanet(systemId, planet) {
        const system = this.systems().find(s => s.id === systemId)
        if (!system) return
        system.planets = system.planets.map(p => p.id === planet.id ? planet : p)
        this.updateSystem(system)
    }

    export() {
        return dump(this.systems())
    }

    import(json) {
        this.systems(parse(json))
    }

}

const storageClient = new StorageClient()

export default storageClient