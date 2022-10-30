import {validateV2} from "../../client/io/validation.js";

const planet = (changePlanet) => {
    const aPlanet = {
        id: "planet-1",
        name: "planet-1",
        imports: ["p-1", "p-2"],
        exports: ["p-3", "p-4"],
        enabledRecipes: ["r-2", "r-5"],
        productionRates: [{
            product: "p-3",
            rate: "100/m"
        }]
    };

    changePlanet && changePlanet(aPlanet)

    return aPlanet
}

const system = (changeSystem, changePlanet) => {
    let aSystem = {
        id: "system-1",
        name: "system-1",
        planets: [
            planet(changePlanet)
        ]
    };

    changeSystem && changeSystem(aSystem)

    return aSystem
}

const model = (changeSystem, changePlanet) => {
    return {
        version: 2,
        systems: [system(changeSystem, changePlanet)]
    }
}


test('test validateV2', () => {
    const aModel = model()

    expect(validateV2(aModel)).toStrictEqual(aModel.systems)
})

test('test missing properties', () => {
    expect(() => validateV2(model(s => delete s.id)))
        .toThrowError(/schema validation error at: \["systems",0,"id"]/)
    expect(() => validateV2(model(s => delete s.name)))
        .toThrowError(/schema validation error at: \["systems",0,"name"]/)
    expect(() => validateV2(model(s => delete s.planets)))
        .toThrowError(/schema validation error at: \["systems",0,"planets"]/)
    expect(() => validateV2(model(null, p => delete p.id)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"id"]/)
    expect(() => validateV2(model(null, p => delete p.name)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"name"]/)
    expect(() => validateV2(model(null, p => delete p.imports)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"imports"]/)
    expect(() => validateV2(model(null, p => delete p.exports)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"exports"]/)
    expect(() => validateV2(model(null, p => delete p.enabledRecipes)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"enabledRecipes"]/)
    expect(() => validateV2(model(null, p => delete p.productionRates)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"productionRates"]/)
    expect(() => validateV2(model(null, p => delete p.productionRates[0].product)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"productionRates",0,"product"]/)
    expect(() => validateV2(model(null, p => delete p.productionRates[0].rate)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"productionRates",0,"rate"]/)
})
