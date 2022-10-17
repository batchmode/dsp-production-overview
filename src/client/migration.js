const MODEL_VERSION = 1


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

const parse = (json) => {
    const version = versionOf(json)

    switch (version) {
        case 1:
            return validateV1(json)
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