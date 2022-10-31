import Product from "./Product.jsx";
import DeletePlanet from "./DeletePlanet.jsx";
import {useState} from "react";
import SelectProducts from "./SelectProducts.jsx";
import Popup from "./ui/Popup.jsx";
import ProductionRate from "./ProductionRate.jsx";

const Planet = ({system, planet, model, updateModel, onShowProductionChain, showProductionRates}) => {

    const [showImportSelection, setShowImportSelection] = useState(false)
    const [showExportSelection, setShowExportSelection] = useState(false)
    const [showResourceSelection, setShowResourceSelection] = useState(false)
    const [editProductionRateFor, setShowEditProductionRateFor] = useState(null)

    const handleClickResourceSelection = _ => {
        setShowResourceSelection(true)
        setShowImportSelection(false)
        setShowExportSelection(false)
    }

    const handleClickImportSelection = _ => {
        setShowResourceSelection(false)
        setShowImportSelection(true)
        setShowExportSelection(false)
    }

    const handleClickExportSelection = _ => {
        setShowResourceSelection(false)
        setShowImportSelection(false)
        setShowExportSelection(true)
    }

    const onResourcesSave = products => {
        console.log(products)
        updateModel({
            type: 'updatePlanetResources', payload: {
                id: planet.id,
                systemId: system.id,
                resourceIds: products.map(p => p.id)
            }
        })
        setShowResourceSelection(false)
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
        setShowResourceSelection(false)
        setShowImportSelection(false)
        setShowExportSelection(false)
    }

    const productById = id => {
        return model.products.find(p => p.id === id)
    }

    const productionRateFor = id => {
        if (!showProductionRates) return ""

        const rate = planet.productionRates.find(r => r.product === id);
        return rate ? rate.rate : ""
    }

    const resourceItems = planet.resources.map(r => (<div key={r}><Product product={productById(r)} size="small"/></div>))
    const importItems = planet.imports.map(i => (<div key={i}><Product product={productById(i)} tooltip/></div>))
    const exportItems = planet.exports.map(e => (
        <div key={e} onClick={_ => setShowEditProductionRateFor(productById(e))}>
            <Product product={productById(e)} productionRate={productionRateFor(e)} tooltip/>
        </div>
    ))

    const resourceSelectionConfig = [
        {
            title: 'Resources',
            filter: p => p.category === 'resource'
        }
    ]

    const selectionConfig = [
        {
            title: 'Products',
            filter: p => p.category !== 'building'
        }, {
            title: 'Buildings',
            filter: p => p.category === 'building'
        }
    ]

    let resourceSelection = (<></>)

    if (showResourceSelection) {
        resourceSelection = (
            <Popup>
                <SelectProducts planet={planet} title="Resources" products={planet.resources.map(productById)} allProducts={model.products}
                                config={resourceSelectionConfig} onSave={onResourcesSave} onCancel={onCancel}/>
            </Popup>
        )
    }

    let importSelection = (<></>)

    if (showImportSelection) {
        importSelection = (
            <Popup>
                <SelectProducts planet={planet} title="Imports" products={planet.imports.map(productById)}
                                allProducts={model.products} config={selectionConfig} onSave={onImportSave}
                                onCancel={onCancel}/>
            </Popup>
        )
    }

    let exportSelection = (<></>)

    if (showExportSelection) {
        exportSelection = (
            <Popup>
                <SelectProducts planet={planet} title="Exports" products={planet.exports.map(productById)}
                                allProducts={model.products} config={selectionConfig} onSave={onExportSave}
                                onCancel={onCancel}/>
            </Popup>
        )
    }

    const productionRatePopup = editProductionRateFor != null
        ? (
            <Popup>
                <ProductionRate product={editProductionRateFor} planet={planet} system={system}
                                updateModel={updateModel} onClose={_ => setShowEditProductionRateFor(null)}/>
            </Popup>
        )
        : (<></>)

    const resourcesButton = planet.resources.length > 0
        ? (
            <div>
                <button
                    className="hover:bg-gray-100 rounded p-1 font-bold text-xs cursor-pointer text-gray-500 inline-block"
                    onClick={handleClickResourceSelection}>resources:
                </button>
                {resourceSelection}
            </div>
        )
        : (
            <div className="invisible group-hover:visible">
                <button
                    className="hover:bg-gray-100 rounded pt-1 pb-1 pl-2 pr-2 font-bold text-xs cursor-pointer text-gray-500 inline-block"
                    onClick={handleClickResourceSelection}>resources
                </button>
                {resourceSelection}
            </div>
        )

    return (<div className="flex flex-col gap-1">
        <div key={planet.id}
             className="ml-2 mt-1 mb-2 flex items-center gap-2 group border-b-[1px]">
            <div className="cursor-pointer hover:text-blue-400 p-1 rounded-md hover:bg-gray-100 transition duration-75 ease-in-out"
                 onClick={_ => onShowProductionChain()}>{planet.name}</div>
            <div className="invisible group-hover:visible">
                <DeletePlanet system={system} planet={planet} updateModel={updateModel}/>
            </div>
            {resourcesButton}
            <div className="flex flex-wrap min-h-[32px] items-center">{resourceItems}</div>
        </div>
        <div className="flex flex-col gap-2 items-stretch">
            <div className="flex gap-2 justify-start">
                <button
                    className="ml-2 bg-gray-200 rounded pt-1 pb-1 pl-2 pr-2 hover:text-blue-400 hover:bg-gray-100 transition duration-75 ease-in-out text-gray-500 inline-block"
                    onClick={handleClickImportSelection}>imports
                </button>
                <div className="flex flex-wrap min-h-[32px] cursor-pointer">{importItems}</div>
                {importSelection}
            </div>
            <div className="flex gap-2 justify-start">
                <button
                    className="ml-2 bg-gray-200 rounded pt-1 pb-1 pl-2 pr-2 hover:text-blue-400 hover:bg-gray-100 transition duration-75 ease-in-out cursor-pointer text-gray-500 inline-block"
                    onClick={handleClickExportSelection}>exports
                </button>
                <div className="flex flex-wrap min-h-[32px] cursor-pointer">{exportItems}</div>
                {exportSelection}
            </div>
        </div>
        {productionRatePopup}
    </div>)
}

export default Planet