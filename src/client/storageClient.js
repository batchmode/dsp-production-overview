const StorageClient = class {

    systems(system) {
        if (system) {
            window.localStorage.setItem("systems", JSON.stringify(system))
        } else {
            return JSON.parse(window.localStorage.getItem("systems")) || []
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

        if (system.planets.find(p => p.name === name)) return

        system.planets.push({
            id: name,
            name: name,
            imports: [],
            exports: [],
            enabledRecipes: []
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
        return this.systems()
    }

    import(systems) {
        this.systems(systems)
    }

}

const storageClient = new StorageClient()

export default storageClient