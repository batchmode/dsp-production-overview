const MODEL_VERSION = 2


const missing = item => {
    return new Error("bad input, missing element: " + item)
}

const checkProp = (object, prop) => {
    if (!object[prop]) throw missing(prop)
}

const checkProps = (object, props) => {
    props.forEach(prop => checkProp(object, prop))
}

const versionOf = (json) => {
    checkProp(json, "version")

    return json.version
}


const validateV1 = json => {
    const validatePlanet = planet => {
        checkProps(planet, ["id", "name", "imports", "exports", "enabledRecipes"])
    }

    const validateSystem = system => {
        checkProps(system, ["id", "name", "planets"])
        system.planets.forEach(validatePlanet)
    }

    checkProp(json, "systems")
    json.systems.forEach(validateSystem)

    return json.systems
}

const validateV2 = json => {
    const validateProductionRate = pr => {
        checkProps(pr, "product", "rate")
    }

    const validatePlanet = planet => {
        checkProps(planet, ["id", "name", "imports", "exports", "enabledRecipes", "productionRates"])
        planet.productionRates.forEach(validateProductionRate)
    }

    const validateSystem = system => {
        checkProps(system, ["id", "name", "planets"])
        system.planets.forEach(validatePlanet)
    }

    console.log(json)
    checkProps(json, ["systems"])
    json.systems.forEach(validateSystem)
    return json.systems
}

const migrateToV2 = jsonV1 => {
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

    const migrateSysem = s => {
        return {
            id: s.id,
            name: s.name,
            planets: s.planets.map(migratePlanet)
        }
    }

    return {
        version: 2,
        systems: jsonV1.systems.map(migrateSysem)
    }
}

const parse = (json) => {
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