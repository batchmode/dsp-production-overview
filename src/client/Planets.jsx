import Planet from "./Planet.jsx";
import AddPlanet from "./AddPlanet.jsx";
import DeleteSystem from "./DeleteSystem.jsx";
import {useEffect, useState} from "react";
import Sidebar from "./Sidebar.jsx";
import ProductionOverview from "./ProductionOverview.jsx";

const Planets = ({model, updateModel, filter}) => {

    const [showChainForPlanet, setShowChainForPlanet] = useState(null)

    useEffect(() => {
        if (showChainForPlanet) {
            const planetFromModel = model.systems.map(s => s.planets).flatMap(p => p).find(p => p.id === showChainForPlanet.id)
            setShowChainForPlanet(planetFromModel)
        }
    }, [model])

    if (!model) {
        return (<div>Loading...</div>)
    }

    if(model.systems.length === 0) {
        return (
            <div className="flex flex-col gap-2">
                <div className="p-2 text-xl italic font-serif">"So much emptiness in space...."</div>
                <div>Start adding some systems using "Add System" button above.</div>
            </div>
        )
    }

    const filtered = p => {
        if (!filter) {
            return true
        }

        return p.name.toLowerCase().includes(filter.toLowerCase())
    }

    const items = model.systems.filter(filtered).map(s => {

        const planetItems = s.planets.map(p => (
            <Planet key={p.id} planet={p} model={model} updateModel={updateModel} onShowProductionChain={_ => setShowChainForPlanet(p)}/>
        ))

        return (<li key={s.id} className="p-1 flex gap-2 text-sm flex flex-col border border-1 border-gray-200 rounded">
            <div className="bg-gray-50 p-1 rounded border-b-2 flex gap-2 items-center group">
                <div className="hover:text-blue-400 transition duration-75 ease-in-out">{s.name} System</div>
                <div className="invisible group-hover:visible"><DeleteSystem system={s} updateModel={updateModel}/></div>
                <div className="invisible group-hover:visible"><AddPlanet system={s} updateModel={updateModel}/></div>
            </div>
            <div className="mb-2 flex flex-col gap-3">{planetItems}</div>
        </li>)
    })

    return (<div className="p-2">
        <ul className="flex gap-2 flex-col">{items}</ul>
        <Sidebar open={showChainForPlanet != null} onClose={_ => setShowChainForPlanet(null)}>
            <ProductionOverview planet={showChainForPlanet} model={model} updateModel={updateModel}/>
        </Sidebar>
    </div>)
}

export default Planets