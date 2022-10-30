import {validateV1, validateV2, validateV3, versionOf} from "./validation.js";

const MODEL_VERSION = 3


const migrateToV2 = systemsV1 => {
    const migratePlanet = p => {
        p.productionRates = []
        return p
    }

    const migrateSystem = s => {
        s.planets = s.planets.map(migratePlanet)
        return s
    }

    return {
        version: 2,
        systems: systemsV1.map(migrateSystem)
    }
}

const migrateToV3= systemsV1 => {
    const migratePlanet = p => {
        p.resources = []
        return p
    }

    const migrateSystem = s => {
        s.planets = s.planets.map(migratePlanet)
        return s
    }

    return {
        version: 3,
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
            return parse(migrateToV3(validateV2(json)))
        case 3:
            return validateV3(json)
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