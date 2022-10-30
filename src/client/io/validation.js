const missing = (object, prop) => {
    return new Error("bad input, missing element: " + prop + " in " + JSON.stringify(object))
}

const checkProp = (object, prop) => {
    if (object[prop] === undefined || object[prop] === null) throw missing(object, prop)
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
        checkProps(pr, ["product", "rate"])
    }

    const validatePlanet = planet => {
        checkProps(planet, ["id", "name", "imports", "exports", "enabledRecipes", "productionRates"])
        planet.productionRates.forEach(validateProductionRate)
    }

    const validateSystem = system => {
        checkProps(system, ["id", "name", "planets"])
        system.planets.forEach(validatePlanet)
    }

    checkProps(json, ["systems"])
    json.systems.forEach(validateSystem)
    return json.systems
}

export {versionOf, validateV1, validateV2}