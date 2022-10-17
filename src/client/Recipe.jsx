import Product from "./Product.jsx";
import Icon from "./Icon.jsx";

const Recipe = ({recipe}) => {

    const inputItems = recipe.inputs.map(i => (<div key={i.id}><Product product={i}/></div>))
    const outputItems = recipe.outputs.map(o => (<div key={o.id}><Product product={o}/></div>))

    const arrow = recipe.inputs.length > 0 ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
        </svg>
    ) : (
        <></>
    )

    return (<div className="flex gap-1 items-center text-sm">
        <Icon x={recipe.iconPosition[0]} y={recipe.iconPosition[1]}/>
        <div>{recipe.name}</div>
        <div className="ml-4 flex">{inputItems}</div>
        {arrow}
        <div className="flex">{outputItems}</div>
    </div>)
}

export default Recipe