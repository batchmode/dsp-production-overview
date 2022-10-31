import Recipe from "./Recipe.jsx";
import {useMemo} from "react";

const Recipes = ({model, filter}) => {

    const fullRecipes = useMemo(() => {
        if (!model) return []

        const products = model.products

        return model.recipes.map(r => {

            const inputs = r.inputs.map(i => products.find(p => p.id === i));
            const outputs = r.outputs.map(o => products.find(p => p.id === o));

            return {
                origin: r,
                id: r.id,
                name: r.name,
                iconPosition: r.iconPosition,
                inputs,
                outputs,
                filterString: r.name.toLowerCase(),
                filterInputsString: inputs.map(i => i.name).join(" ").toLowerCase(),
                filterOutputsString: outputs.map(o => o.name).join(" ").toLowerCase()
            }
        })
    }, [model])

    if (!model) {
        return (<div>"Loading ..."</div>)
    }

    const filtered = r => {
        if (!filter) {
            return true
        }

        if (filter.startsWith("in:")) return r.filterInputsString.includes(filter.substring(3).toLowerCase())
        if (filter.startsWith("out:")) return r.filterOutputsString.includes(filter.substring(4).toLowerCase())

        return r.filterString.includes(filter.toLowerCase())
    }


    const items = fullRecipes.filter(filtered).map(r => (
        <div key={r.id}>
            <Recipe recipe={r}/>
        </div>
    ))

    return (<div className="p-2">
        <ul className="flex gap-2 flex-col">{items}</ul>
    </div>)

}

export default Recipes