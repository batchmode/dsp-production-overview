import {dump, parse} from "../../client/io/migration.js";

test('parse v1 empty system', () => {
    const model = {version: 1, systems: []}
    const parsed = parse(model);

    expect(parsed).toBeTruthy()
    expect(parsed).toStrictEqual([])
})

test('parse v1 system empty planets', () => {
    const model = {
        version: 1, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: []
            }
        ]
    }
    const parsed = parse(model);

    expect(parsed).toBeTruthy()
    expect(parsed).toStrictEqual([
        {
            id: "system 1",
            name: "system 1",
            planets: []
        }
    ])
})

test('parse v1 system with planets', () => {
    const model = {
        version: 1, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet 1",
                    name: "planet 1",
                    imports: [],
                    exports: [],
                    enabledRecipes: []
                }]
            }
        ]
    }
    const parsed = parse(model);

    expect(parsed).toBeTruthy()
    expect(parsed).toStrictEqual([
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet 1",
                    name: "planet 1",
                    imports: [],
                    exports: [],
                    enabledRecipes: [],
                    productionRates: []
                }]
            }
        ]
    )
})

test('parse v1 system missing elements', () => {
    const missingId = {
        version: 1, systems: [
            {
                name: "system 1",
                planets: []
            }
        ]
    }

    const missingName = {
        version: 1, systems: [
            {
                id: "system 1",
                planets: []
            }
        ]
    }

    const missingPlanets = {
        version: 1, systems: [
            {
                id: "system 1",
                name: "system 1"
            }
        ]
    }

    expect(() => parse(missingId)).toThrowError(/schema validation error at: \["systems",0,"id"]/)
    expect(() => parse(missingName)).toThrowError(/schema validation error at: \["systems",0,"name"]/)
    expect(() => parse(missingPlanets)).toThrowError(/schema validation error at: \["systems",0,"planets"]/)
})

test('parse v1 planets missing elements', () => {
    const missingId = {
        version: 1, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    name: "planet name",
                    imports: [],
                    exports: [],
                    enabledRecipes: []
                }]
            }
        ]
    }

    const missingName = {
        version: 1, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet name",
                    imports: [],
                    exports: [],
                    enabledRecipes: []
                }]
            }
        ]
    }

    const missingImports = {
        version: 1, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet name",
                    name: "planet name",
                    exports: [],
                    enabledRecipes: []
                }]
            }
        ]
    }

    const missingExports = {
        version: 1, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet name",
                    name: "planet name",
                    imports: [],
                    enabledRecipes: []
                }]
            }
        ]
    }

    const missingEnabledRecipes = {
        version: 1, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet name",
                    name: "planet name",
                    imports: [],
                    exports: []
                }]
            }
        ]
    }

    expect(() => parse(missingId)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"id"]/)
    expect(() => parse(missingName)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"name"/)
    expect(() => parse(missingExports)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"exports"/)
    expect(() => parse(missingImports)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"imports"/)
    expect(() => parse(missingEnabledRecipes)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"enabledRecipes"/)
})

test('parse v1 migrate to v2', () => {
    const model = {
        version: 1, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet 1",
                    name: "planet 1",
                    imports: ["product_one"],
                    exports: ["product_two"],
                    enabledRecipes: ["recipe_1"]
                }]
            }
        ]
    }
    const parsed = parse(model);

    expect(parsed).toBeTruthy()
    expect(parsed).toStrictEqual([
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet 1",
                    name: "planet 1",
                    imports: ["product_one"],
                    exports: ["product_two"],
                    enabledRecipes: ["recipe_1"],
                    productionRates: []
                }]
            }
        ]
    )
})

test('parse v2', () => {
    const model = {
        version: 1, systems: [

            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet 1",
                    name: "planet 1",
                    imports: ["product_one"],
                    exports: ["product_two"],
                    enabledRecipes: ["recipe_1"],
                    productionRates: []
                }]
            }
        ]
    }

    const parsed = parse(model);

    expect(parsed).toBeTruthy()
    expect(parsed).toStrictEqual([
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet 1",
                    name: "planet 1",
                    imports: ["product_one"],
                    exports: ["product_two"],
                    enabledRecipes: ["recipe_1"],
                    productionRates: []
                }]
            }
        ]
    )
})

test('parse v2 planets missing elements', () => {
    const missingId = {
        version: 2, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    name: "planet name",
                    imports: [],
                    exports: [],
                    enabledRecipes: [],
                    productionRates: []
                }]
            }
        ]
    }

    const missingName = {
        version: 2, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet name",
                    imports: [],
                    exports: [],
                    enabledRecipes: [],
                    productionRates: []
                }]
            }
        ]
    }

    const missingImports = {
        version: 2, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet name",
                    name: "planet name",
                    exports: [],
                    enabledRecipes: [],
                    productionRates: []
                }]
            }
        ]
    }

    const missingExports = {
        version: 2, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet name",
                    name: "planet name",
                    imports: [],
                    enabledRecipes: [],
                    productionRates: []
                }]
            }
        ]
    }

    const missingEnabledRecipes = {
        version: 2, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet name",
                    name: "planet name",
                    imports: [],
                    exports: [],
                    productionRates: []
                }]
            }
        ]
    }

    const missingProductionRates = {
        version: 2, systems: [
            {
                id: "system 1",
                name: "system 1",
                planets: [{
                    id: "planet name",
                    name: "planet name",
                    imports: [],
                    exports: [],
                    enabledRecipes: []
                }]
            }
        ]
    }

    expect(() => parse(missingId)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"id"]/)
    expect(() => parse(missingName)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"name"]/)
    expect(() => parse(missingExports)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"exports"]/)
    expect(() => parse(missingImports)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"imports"]/)
    expect(() => parse(missingEnabledRecipes)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"enabledRecipes"]/)
    expect(() => parse(missingProductionRates)).toThrowError(/schema validation error at: \["systems",0,"planets",0,"productionRates"]/)
})

test("dump", () => {
    const model = [{
        "id": "system 2"
    }]

    expect(dump(model)).toStrictEqual({
        version: 2,
        systems: model
    })

})