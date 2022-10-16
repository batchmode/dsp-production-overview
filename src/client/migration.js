const MODEL_VERSION = 1

const parse = (json) => {
    return json.systems
}

const dump = (systems) => {
    return {
        version: MODEL_VERSION, systems
    }
}

export {parse, dump}