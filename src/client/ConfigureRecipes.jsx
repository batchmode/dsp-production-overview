import {useMemo, useState} from "react";
import Recipe from "./Recipe.jsx";
import Search from "./Search.jsx";
import Button from "./ui/Button.jsx";

const ConfigureRecipes = ({system, planet, model, updateModel, onClose, initialFilter}) => {

    const [selectedRecipes, setSelectedRecipes] = useState(planet.enabledRecipes)
    const [filter, setFilter] = useState(initialFilter)

    const filtered = r => {
        if (!filter || filter.length === 0) {
            return true
        }

        return r.filterBy.includes(filter.toLowerCase())
    }

    const handleCancel = () => {
        setSelectedRecipes(planet.enabledRecipes)
        onClose && onClose()
    }

    const handleSave = () => {
        updateModel({type: "updatePlanetRecipes", payload: {planet: planet, systemId: system.id, recipes: selectedRecipes}})
        onClose && onClose()
    }

    const addRecipe = r => {
        if (selectedRecipes.find(s => s === r.id)) return

        setSelectedRecipes(prev => {
            const update = prev.slice()
            update.push(r.id)
            return update
        })
    }

    const removeRecipe = r => {
        setSelectedRecipes(prev => prev.filter(p => p !== r.id))
    }

    const productById = id => model.products.find(p => p.id === id)
    const recipeById = id => model.recipes.find(r => r.id === id)

    const toFullRecipe = r => {

        const outputs = r.outputs.map(productById);

        return {
            origin: r,
            id: r.id,
            name: r.name,
            iconPosition: r.iconPosition,
            inputs: r.inputs.map(productById),
            outputs,
            filterBy: r.name.toLowerCase() + " " + outputs.map(o => o.name.toLowerCase()).join(" ")
        }
    }

    const recipeAlternatives = useMemo(() => {
        if (!model) return []

        const recipesOf = p => model.recipes.filter(r => r.outputs.find(o => o === p.id))

        return [...new Set(model.products.map(recipesOf).filter(r => r.length > 1).flatMap(r => r))]
    }, [model])

    const availableRecipeItems = recipeAlternatives.filter(a => !selectedRecipes.find(s => s === a.id)).map(toFullRecipe).filter(filtered).map(a => (
        <div key={a.id} className="hover:bg-gray-200 cursor-pointer" onClick={_ => addRecipe(a)}><Recipe recipe={a}/>
        </div>
    ))

    const selectedRecipeItems = selectedRecipes.map(recipeById).map(toFullRecipe).map(s => (
        <div key={s.id} className="hover:bg-gray-200 cursor-pointer" onClick={_ => removeRecipe(s)}>
            <Recipe recipe={s}/>
        </div>
    ))


    return (
        <div className="bg-white border border-1 border-gray-500 rounded-md shadow-md flex flex-col items-start">
            <div className="flex flex-row text-sm">
                <div className="flex flex-col gap-2">
                    <div className="p-2 bg-gray-200 rounded-tl-md">Available Recipes</div>
                    <div className="h-[70vh] overflow-auto">
                        <div className="h-full flex flex-col flex-1 p-1 gap-2">{availableRecipeItems}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="p-2 bg-gray-200 rounded-tr-md">Enabled Recipes</div>
                    <div className="h-[70vh] overflow-auto">
                        <div className="h-full flex flex-col p-1 gap-2 border-l-2 border-gray-200">{selectedRecipeItems}</div>
                    </div>
                </div>
            </div>

            <div className="flex w-full">
                <div className="p-2 gap-2 border-gray-200 border-t-2 w-full flex justify-start">
                    <Search value={filter} onChange={setFilter} focus/>
                </div>
                <div className="p-2 gap-2 border-gray-200 border-t-2 w-full flex justify-end">
                    <Button label="save" onClick={handleSave}/>
                    <Button label="cancel" onClick={handleCancel}/>
                </div>
            </div>
        </div>
    )
}

export default ConfigureRecipes