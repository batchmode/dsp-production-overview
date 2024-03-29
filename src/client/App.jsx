import './io/model.js'
import {useModel} from "./io/model.js";

import './App.css'
import {Tab, TabPane} from "./ui/TabPane.jsx";
import {useState} from "react";
import Products from "./Products.jsx";
import Planets from "./Planets.jsx";
import AddSystem from "./AddSystem.jsx";
import Recipes from "./Recipes.jsx";
import Search from "./Search.jsx";
import ImportExport from "./ImportExport.jsx";
import Version from "./Version.jsx";
import Attributions from "./Attributions.jsx";
import Readme from "./Readme.jsx";
import DevTools from "./dev/DevTools.jsx";
import Toggle from "./ui/Toggle.jsx";


function App() {

    const [model, updateModel] = useModel()
    const [planetFilter, setPlanetFilter] = useState("")
    const [productFilter, setProductFilter] = useState("")
    const [recipeFilter, setRecipeFilter] = useState("")
    const [showProductionRates, setShowProductionRates] = useState(true)

    const planetsToolbar = (
        <div className="flex flex-row gap-2">
            <AddSystem updateModel={updateModel}/>
            <Search value={planetFilter} onChange={setPlanetFilter}/>
        </div>)
    const productsToolbar = (<Search value={productFilter} onChange={setProductFilter}/>)
    const recipesToolbar = (<Search value={recipeFilter} onChange={setRecipeFilter}/>)

    const toolbar = (
        <div className="flex gap-4 items-center">
            <Toggle label="Show Production Rates" checked={showProductionRates} onChange={setShowProductionRates}/>
            <DevTools model={model}/>
            <Readme/>
            <ImportExport updateModel={updateModel}/>
        </div>
    )

    return (
        <div className="w-full h-full p-0 m-0 flex flex-col">
            <div className="min-h-0 flex flex-col mb-[1.5em]">
                <TabPane toolbar={toolbar}>
                    <Tab label="Overview" toolbar={planetsToolbar}>
                        <Planets model={model} updateModel={updateModel} filter={planetFilter}
                                 showProductionRates={showProductionRates}/>
                    </Tab>
                    <Tab label="Products" toolbar={productsToolbar}><Products model={model}
                                                                              filter={productFilter}/></Tab>
                    <Tab label="Recipes" toolbar={recipesToolbar}><Recipes model={model}
                                                                           filter={recipeFilter}/></Tab>
                </TabPane>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex pl-6 pr-8 m-0 pt-0 pb-2 justify-between">
                <div className="justify-self-start"><Attributions/></div>
                <Version/>
            </div>
        </div>
    )
}

export default App
