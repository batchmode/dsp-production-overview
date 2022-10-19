import ProductionChain from "./ProductionChain.jsx";
import {useState} from "react";
import Popup from "./Popup.jsx";
import ConfigureRecipes from "./ConfigureRecipes.jsx";
import useProductionChains from "./useProductionChains.jsx";
import ProductionRate from "./ProductionRate.jsx";

const ProductionOverview = ({system, planet, model, updateModel, onClose}) => {

    const [showConfigureRecipes, setShowConfigureRecipes] = useState({show: false})
    const [showSetProductionRate, setShowSetProductionRate] = useState({show: false})
    const productionChains = useProductionChains(planet, model)

    if (!planet) return (<></>)

    const handleClickProduct = (product, action) => {
        switch (action) {
            case "showRecipes":
                setShowConfigureRecipes({show: true, filter: product.name})
                break
            case "setProductionRate":
                setShowSetProductionRate({show: true, product})
                break
        }
    }

    const handleClickClose = _ => {
        onClose && onClose()
    }

    const productionItems = productionChains.map(chain => {
        return (
            <div key={chain.product.id}>
                <ProductionChain roots={chain.roots} onClickProduct={handleClickProduct}/>
            </div>
        )
    })

    const recipesPopup = showConfigureRecipes.show
        ? (
            <Popup>
                <ConfigureRecipes system={system} planet={planet} model={model} updateModel={updateModel}
                                  onClose={_ => setShowConfigureRecipes({show: false})}
                                  initialFilter={showConfigureRecipes.filter}/>
            </Popup>
        )
        : (<></>)

    const productionRatePopup = showSetProductionRate.show
        ? (
            <Popup>
                <ProductionRate system={system} planet={planet} product={showSetProductionRate.product}
                                onClose={_ => setShowSetProductionRate({show: false})}
                                updateModel={updateModel}/>
            </Popup>
        )
        : (<></>)

    const warningIcon = productionChains.find(chain => chain.hasMissingRecipes)
        ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="darkorange" className="w-6 h-6"
                onClick={_ => setShowConfigureRecipes({show: true, filter: ""})}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
            </svg>
        )
        : (<></>)

    return (
        <div className="flex flex-col h-full w-full pb-2 rounded-md">
            <div className="p-2 mb-2 font-semibold text-lg bg-gray-200 flex-none flex justify-between items-center rounded-t-md">
                <div className="flex gap-1 items-center">
                    <button className="capitalize text-xs hover:text-blue-400 p-1 transition duration-75 ease-in-out" onClick={handleClickClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                    <div>{planet.name}</div>
                    {warningIcon}
                </div>
                <button
                    className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 bg-white hover:bg-gray-200"
                    onClick={_ => setShowConfigureRecipes({show: true, filter: ""})}>
                    Configure Recipes
                </button>
            </div>
            <div className="overflow-auto">
                <div className="p-2 flex flex-col gap-1 divide-y-2 divide-gray-100 items-center">
                    {productionItems}
                </div>
            </div>
            {recipesPopup}
            {productionRatePopup}
        </div>
    )
}

export default ProductionOverview