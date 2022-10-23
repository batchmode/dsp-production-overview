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

    expect(() => parse(missingId)).toThrowError(/bad input, missing element: id in/)
    expect(() => parse(missingName)).toThrowError(/bad input, missing element: name in/)
    expect(() => parse(missingPlanets)).toThrowError(/bad input, missing element: planets in/)
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

    expect(() => parse(missingId)).toThrowError(/bad input, missing element: id in/)
    expect(() => parse(missingName)).toThrowError(/bad input, missing element: name in/)
    expect(() => parse(missingExports)).toThrowError(/bad input, missing element: exports in/)
    expect(() => parse(missingImports)).toThrowError(/bad input, missing element: imports in/)
    expect(() => parse(missingEnabledRecipes)).toThrowError(/bad input, missing element: enabledRecipes in/)
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

    expect(() => parse(missingId)).toThrowError(/bad input, missing element: id in/)
    expect(() => parse(missingName)).toThrowError(/bad input, missing element: name in/)
    expect(() => parse(missingExports)).toThrowError(/bad input, missing element: exports in/)
    expect(() => parse(missingImports)).toThrowError(/bad input, missing element: imports in/)
    expect(() => parse(missingEnabledRecipes)).toThrowError(/bad input, missing element: enabledRecipes in/)
    expect(() => parse(missingProductionRates)).toThrowError(/bad input, missing element: productionRates in/)
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