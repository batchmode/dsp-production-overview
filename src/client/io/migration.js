import {validateV1, validateV2, versionOf} from "./validation.js";

const MODEL_VERSION = 2


const migrateToV2 = systemsV1 => {
    const migratePlanet = p => {
        return {
            id: p.id,
            name: p.name,
            imports: p.imports,
            exports: p.exports,
            enabledRecipes: p.enabledRecipes,
            productionRates: []
        }
    }

    const migrateSystem = s => {
        return {
            id: s.id,
            name: s.name,
            planets: s.planets.map(migratePlanet)
        }
    }

    return {
        version: 2,
        systems: systemsV1.map(migrateSystem)
    }
}

const parse = (json) => {
    if (!json) return []

    const version = versionOf(json)

    switch (version) {
        case 1:
            return parse(migrateToV2(validateV1(json)))
        case 2:
            return validateV2(json)
        default:
            throw new Error("unknown model version " + version)
    }
}

const dump = (systems) => {
    return {
        version: MODEL_VERSION, systems
    }
}

export {parse, dump}