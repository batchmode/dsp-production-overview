import {useMemo} from "react";
import * as d3 from "d3";

const useProductionChains = (planet, model) => {

    return useMemo(() => {

        if(!planet || !model) {
            return []
        }

        const productById = id => model.products.find(p => p.id === id)

        const availableProducts = planet.imports.map(productById)
        const enabledRecipes = planet.enabledRecipes

        const emptyRecipe = (product, id) => {
            return {
                id,
                name: product.name,
                outputs: [product.id],
                inputs: []
            }
        }

        const allRecipesOf = product => {
            return model.recipes.filter(r => r.outputs.find(o => o === product.id))
        }

        const enabledRecipesOf = product => {

            if (availableProducts.find(a => a.id === product.id)) {
                return [emptyRecipe(product, "available")]
            }

            const candidates = allRecipesOf(product)

            if (candidates.length === 1) return candidates

            const filtered = candidates.filter(c => enabledRecipes.find(e => e === c.id));

            if (filtered.length === 0) return [emptyRecipe(product, "missing")]

            return filtered
        }

        const childrenOf = (productAndRecipe, skipProductRecipes) => {

            if (skipProductRecipes.find(s => s.recipe === productAndRecipe.recipe.id && s.product === productAndRecipe.product.id)) return []
            skipProductRecipes.push({
                recipe: productAndRecipe.recipe.id,
                product: productAndRecipe.product.id
            })

            const inputProducts = productAndRecipe.recipe.inputs.map(productById)

            return inputProducts.map(p => enabledRecipesOf(p).map(r => {
                return {product: p, recipe: r}
            })).flatMap(r => r)
        }

        return planet.exports.map(productById).map(product => {
            const roots = enabledRecipesOf(product).map(rp => {
                const skipProductRecipes = []
                return d3.hierarchy({product, recipe: rp}, r => childrenOf(r, skipProductRecipes))
            });
            const hasMissingRecipes = !!roots.find(r => r.descendants().find(d => d.data.recipe.id === 'missing'))
            return {product, roots, hasMissingRecipes}
        })

    }, [planet, model])

}

export default useProductionChains