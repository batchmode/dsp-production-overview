import './model.js'
import {useModel} from "./model.js";

import './App.css'
import {Tab, TabPane} from "./TabPane";
import {useState} from "react";
import Products from "./Products.jsx";
import Planets from "./Planets.jsx";
import AddSystem from "./AddSystem.jsx";
import Recipes from "./Recipes.jsx";
import Search from "./Search.jsx";
import ImportExport from "./ImportExport.jsx";


function App() {

    const [model, updateModel] = useModel()
    const [planetFilter, setPlanetFilter] = useState("")
    const [productFilter, setProductFilter] = useState("")
    const [recipeFilter, setRecipeFilter] = useState("")

    const planetsToolbar = (
        <div className="flex flex-row gap-2"><AddSystem updateModel={updateModel}/><Search value={planetFilter}
                                                                                           onChange={setPlanetFilter}/>
        </div>)
    const productsToolbar = (<Search value={productFilter} onChange={setProductFilter}/>)
    const recipesToolbar = (<Search value={recipeFilter} onChange={setRecipeFilter}/>)

    const toolbar = (<ImportExport updateModel={updateModel}/>)

    return (
        <TabPane toolbar={toolbar}>
            <Tab label="Overview" toolbar={planetsToolbar}>
                <Planets model={model} updateModel={updateModel} filter={planetFilter}/>
            </Tab>
            <Tab label="Products" toolbar={productsToolbar}><Products model={model} filter={productFilter}/></Tab>
            <Tab label="Recipes" toolbar={recipesToolbar}><Recipes model={model} filter={recipeFilter}/></Tab>
        </TabPane>

    )
}

export default App
