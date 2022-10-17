import Planet from "./Planet.jsx";
import AddPlanet from "./AddPlanet.jsx";
import DeleteSystem from "./DeleteSystem.jsx";
import {useEffect, useMemo, useState} from "react";
import ProductionOverview from "./ProductionOverview.jsx";
import Overlay from "./Overlay.jsx";

const Planets = ({model, updateModel, filter}) => {

    const [showChainForPlanet, setShowChainForPlanet] = useState(null)

    useEffect(() => {
        if (showChainForPlanet) {
            const systemFromModel = model.systems.find(s => s.id === showChainForPlanet.system.id)
            const planetFromModel = systemFromModel.planets.find(p => p.id === showChainForPlanet.planet.id)
            setShowChainForPlanet({system: systemFromModel, planet: planetFromModel})
        }
    }, [model])

    const filterableSystems = useMemo(() => {
        if (!model) {
            return []
        }

        const productById = id => {
            return model.products.find(p => p.id === id)
        }


        return model.systems.map(s => {
            return {
                system: s,
                filterBy: s.name.toLowerCase() + " " + s.planets.map(p => p.name.toLowerCase()).join(" "),
                planetsFilterBy: s.planets.map(p => {
                    return {
                        id: p.id,
                        filterBy: p.name.toLowerCase() + "" + p.imports.map(productById).flatMap(i => i.name.toLowerCase()).join(" ") + " " + p.exports.map(productById).flatMap(e => e.name.toLowerCase()).join(" ")
                    }
                })
            }
        })
    }, [model])

    if (!model) {
        return (<div>Loading...</div>)
    }

    if (model.systems.length === 0) {
        return (
            <div className="flex flex-col gap-2">
                <div className="p-2 text-xl italic font-serif">"So much emptiness in space...."</div>
                <div>Start adding some systems using "Add System" button above.</div>
            </div>
        )
    }


    const filteredSystem = s => {
        if (!filter || filter.length === 0) {
            return true
        }

        return s.filterBy.includes(filter.toLowerCase()) || s.planetsFilterBy.find(f => f.filterBy.includes(filter.toLowerCase()))
    }

    const filteredPlanet = (fS, p) => {
        if (!filter || filter.length === 0) {
            return true
        }

        return fS.planetsFilterBy.find(pF => pF.filterBy.includes(filter.toLowerCase()) && pF.id === p.id)
    }

    const items = filterableSystems.filter(filteredSystem).map(fS => {
        const s = fS.system
        const planetItems = s.planets.filter(p => filteredPlanet(fS, p)).map(p => (
            <Planet key={p.id} system={s} planet={p} model={model} updateModel={updateModel} onShowProductionChain={_ => setShowChainForPlanet({system: s, planet: p})}/>
        ))

        return (<li key={s.id} className="p-1 flex gap-2 text-sm flex flex-col border border-1 border-gray-200 rounded">
            <div className="bg-gray-50 pl-2 rounded border-b-2 flex gap-2 items-center group">
                <div className="hover:text-blue-400 transition duration-75 ease-in-out">{s.name} System</div>
                <div className="invisible group-hover:visible"><DeleteSystem system={s} updateModel={updateModel}/></div>
                <div className="invisible group-hover:visible"><AddPlanet system={s} updateModel={updateModel}/></div>
            </div>
            <div className="mb-2 flex flex-col gap-3">{planetItems}</div>
        </li>)
    })

    const overlayItem = showChainForPlanet
        ? (
            <Overlay>
                <ProductionOverview system={showChainForPlanet.system} planet={showChainForPlanet.planet} model={model} updateModel={updateModel} onClose={_ => setShowChainForPlanet(null)}/>
            </Overlay>
        )
        : (<></>)

    return (<div className="p-2">
        <ul className="flex gap-2 flex-col">{items}</ul>
        {overlayItem}
    </div>)
}

export default Planets