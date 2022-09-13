import Icon from "./Icon.jsx";

const Product = ({product, name, tooltip}) => {

    const showName = name ? (<div>{product.name}</div>) : (<></>)
    const showTooltip = tooltip ? (<div
        className="bg-gray-600 text-white p-1 rounded left-5 bottom-[105%] invisible group-hover:visible absolute transition duration-150 ease-in-out shadow-lg">{product.name}</div>) : (<></>)


    return (<div className="flex items-center gap-2 text-center group">
        <Icon x={product.iconPosition[0]} y={product.iconPosition[1]}/>
        {showName}
        {showTooltip}
    </div>)

}

export default Product