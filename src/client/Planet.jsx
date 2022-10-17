import Product from "./Product.jsx";
import DeletePlanet from "./DeletePlanet.jsx";
import {useState} from "react";
import SelectProducts from "./SelectProducts.jsx";
import Popup from "./Popup.jsx";

const Planet = ({system, planet, model, updateModel, onShowProductionChain}) => {

    const [showImportSelection, setShowImportSelection] = useState(false)
    const [showExportSelection, setShowExportSelection] = useState(false)

    const handleClickImportSelection = _ => {
        setShowImportSelection(true)
        setShowExportSelection(false)
    }

    const handleClickExportSelection = _ => {
        setShowImportSelection(false)
        setShowExportSelection(true)
    }

    const onImportSave = (products) => {
        updateModel({
            type: 'updatePlanet', payload: {
                id: planet.id,
                systemId: system.id,
                importIds: products.map(p => p.id),
                exportIds: planet.exports
            }
        })
        setShowImportSelection(false)
    }

    const onExportSave = (products) => {
        updateModel({
            type: 'updatePlanet', payload: {
                id: planet.id,
                systemId: system.id,
                importIds: planet.imports,
                exportIds: products.map(p => p.id)
            }
        })
        setShowExportSelection(false)
    }


    const onCancel = _ => {
        setShowImportSelection(false)
        setShowExportSelection(false)
    }

    const productById = id => {
        return model.products.find(p => p.id === id)
    }

    const importItems = planet.imports.map(i => (<div key={i}><Product product={productById(i)} tooltip/></div>))
    const exportItems = planet.exports.map(e => (<div key={e}><Product product={productById(e)} tooltip/></div>))

    let importSelection = (<></>)

    if (showImportSelection) {
        importSelection = (
            <Popup>
                <SelectProducts planet={planet} title="imports" products={planet.imports.map(productById)} allProducts={model.products} onSave={onImportSave}
                                onCancel={onCancel}/>
            </Popup>
        )
    }

    let exportSelection = (<></>)

    if (showExportSelection) {
        exportSelection = (
            <Popup>
                <SelectProducts planet={planet} title="exports" products={planet.exports.map(productById)} allProducts={model.products} onSave={onExportSave}
                                onCancel={onCancel}/>
            </Popup>
        )
    }

    return (<div className="flex flex-col gap-1">
        <div key={planet.id}
             className="ml-2 mt-1 mb-2 flex items-center gap-2 group">
            <div className="cursor-pointer hover:text-blue-400 transition duration-75 ease-in-out" onClick={_ => onShowProductionChain()}>{planet.name}</div>
            <div className="invisible group-hover:visible">
                <DeletePlanet system={system} planet={planet} updateModel={updateModel}/>
            </div>
        </div>
        <div className="flex flex-col gap-2 items-stretch">
            <div className="flex gap-2 justify-start">
                <button
                    className="ml-2 bg-gray-200 rounded pt-1 pb-1 pl-2 pr-2 hover:text-blue-400 hover:bg-gray-100 transition duration-75 ease-in-out cursor-pointer text-gray-500 inline-block"
                    onClick={handleClickImportSelection}>imports
                </button>
                <div className="flex flex-wrap min-h-[32px] cursor-pointer" onClick={_ => onShowProductionChain()}>{importItems}</div>
                {importSelection}
            </div>
            <div className="flex gap-2 justify-start">
                <button
                    className="ml-2 bg-gray-200 rounded pt-1 pb-1 pl-2 pr-2 hover:text-blue-400 hover:bg-gray-100 transition duration-75 ease-in-out cursor-pointer text-gray-500 inline-block"
                    onClick={handleClickExportSelection}>exports
                </button>
                <div className="flex flex-wrap min-h-[32px] cursor-pointer" onClick={_ => onShowProductionChain()}>{exportItems}</div>
                {exportSelection}
            </div>
        </div>
    </div>)
}

export default Planet