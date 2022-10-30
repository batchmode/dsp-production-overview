import {dump, parse} from "../../client/io/migration.js";

const modelV1 = () => {
    return {
        version: 1,
        systems: [
            {
                id: "s-1",
                name: "s-1",
                planets: [
                    {
                        id: "p-1",
                        name: "p-1",
                        imports: ["i-1", "i-2"],
                        exports: ["e-1", "e-2"],
                        enabledRecipes: ["r-1", "r-2"]
                    }
                ]
            }
        ]
    }
}

const modelV2 = () => {
    return {
        version: 2,
        systems: [
            {
                id: "s-1",
                name: "s-1",
                planets: [
                    {
                        id: "p-1",
                        name: "p-1",
                        imports: ["i-1", "i-2"],
                        exports: ["e-1", "e-2"],
                        enabledRecipes: ["r-1", "r-2"],
                        productionRates: [
                            {
                                product: "p-1",
                                rate: "100/m"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const modelV3 = () => {
    return {
        version: 3,
        systems: [
            {
                id: "s-1",
                name: "s-1",
                planets: [
                    {
                        id: "p-1",
                        name: "p-1",
                        resources: ["r-1", "r-2"],
                        imports: ["i-1", "i-2"],
                        exports: ["e-1", "e-2"],
                        enabledRecipes: ["r-1", "r-2"],
                        productionRates: [
                            {
                                product: "p-1",
                                rate: "100/m"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}


test('parse model v1', () => {
    const model = modelV1()
    const expected = modelV1().systems
    expected[0].planets[0].resources = []
    expected[0].planets[0].productionRates = []

    expect(parse(model)).toStrictEqual(expected)
})

test('parse model v2', () => {
    const model = modelV2()
    const expected = modelV2().systems
    expected[0].planets[0].resources = []

    expect(parse(model)).toStrictEqual(expected)
})

test('parse model v3', () => {
    const model = modelV3()
    const expected = modelV3().systems

    expect(parse(model)).toStrictEqual(expected)
})


test("dump", () => {
    const model = modelV3().systems

    expect(dump(model)).toStrictEqual({
        version: 3,
        systems: model
    })

})