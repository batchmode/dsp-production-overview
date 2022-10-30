import validator from "@arikkrol/simple-json-validator";

const missing = (object, prop) => {
    return new Error("bad input, missing element: " + prop + " in " + JSON.stringify(object))
}

const checkProp = (object, prop) => {
    if (object[prop] === undefined || object[prop] === null) throw missing(object, prop)
}

const versionOf = (json) => {
    checkProp(json, "version")

    return json.version
}

const validateV1 = json => {
    const model = {
        version: 'number',
        systems: [
            {
                id: 'string',
                name: 'string',
                planets: [
                    {
                        id: 'string',
                        name: 'string',
                        imports: ['string'],
                        exports: ['string'],
                        enabledRecipes: ['string']
                    }
                ]
            }
        ]
    }

    validator.validate(model, json)
    return json.systems
}

const validateV2 = json => {
    const model = {
        version: 'number',
        systems: [
            {
                id: 'string',
                name: 'string',
                planets: [
                    {
                        id: 'string',
                        name: 'string',
                        imports: ['string'],
                        exports: ['string'],
                        enabledRecipes: ['string'],
                        productionRates: [
                            {
                                product: 'string',
                                rate: 'string'
                            }
                        ]
                    }
                ]
            }
        ]
    }

    validator.validate(model, json)
    return json.systems
}


export {versionOf, validateV1, validateV2}