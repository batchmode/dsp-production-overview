import {validateV1} from "../../client/io/validation.js";

const planet = (changePlanet) => {
    const aPlanet = {
        id: "planet-1",
        name: "planet-1",
        imports: ["p-1", "p-2"],
        exports: ["p-3", "p-4"],
        enabledRecipes: ["r-1", "r-2"]
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
        version: 1,
        systems: [system(changeSystem, changePlanet)]
    }
}


test('test validateV1', () => {
    const aModel = model()

    expect(validateV1(aModel)).toStrictEqual(aModel.systems)
})

test('test missing properties', () => {
    expect(() => validateV1(model(s => delete s.id)))
        .toThrowError(/schema validation error at: \["systems",0,"id"]/)
    expect(() => validateV1(model(s => delete s.name)))
        .toThrowError(/schema validation error at: \["systems",0,"name"]/)
    expect(() => validateV1(model(s => delete s.planets)))
        .toThrowError(/schema validation error at: \["systems",0,"planets"]/)
    expect(() => validateV1(model(null, p => delete p.id)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"id"]/)
    expect(() => validateV1(model(null, p => delete p.name)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"name"]/)
    expect(() => validateV1(model(null, p => delete p.imports)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"imports"]/)
    expect(() => validateV1(model(null, p => delete p.exports)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"exports"]/)
    expect(() => validateV1(model(null, p => delete p.enabledRecipes)))
        .toThrowError(/schema validation error at: \["systems",0,"planets",0,"enabledRecipes"]/)

})
