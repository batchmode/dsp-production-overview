import Icon from "./Icon.jsx";

const Product = ({product, name, tooltip, productionRate}) => {

    const showName = name ? (<div>{product.name}</div>) : (<></>)
    const showTooltip = tooltip ? (<div
        className="bg-gray-600 text-white p-1 rounded left-5 bottom-[105%] invisible group-hover:visible absolute transition duration-150 ease-in-out shadow-lg">{product.name}</div>) : (<></>)

    const cutOff = (value) => {
        if (!value) return ""
        if (value.length > 10) return value.substring(0, 7) + "..."
        return value
    }

    const badgeItem = productionRate
        ? (
            <div className="z-10 text-xs absolute left-[15px] whitespace-nowrap bottom-[-8px] pl-1 pr-1 bg-blue-200 outline outline-white outline-2 rounded-full">
                {cutOff(productionRate)}
            </div>
        )
        : (<></>)

    let width = ""
    switch (cutOff(productionRate).length) {
        case 1:
            width = "w-[2em]"
            break
        case 2:
            width = "w-[2.5em]"
            break
        case 3:
            width = "w-[3em]"
            break
        case 4:
            width = "w-[3.5em]"
            break
        case 5:
            width = "w-[4em]"
            break
        case 6:
            width = "w-[4.5em]"
            break
        case 7:
            width = "w-[5em]"
            break
        case 8:
            width = "w-[5.5em]"
            break
        case 9:
            width = "w-[6em]"
            break
        case 10:
            width = "w-[6.5em]"
            break
    }

    return (
        <div className={"flex items-center text-center group relative " + width}>
            <Icon x={product.iconPosition[0]} y={product.iconPosition[1]}/>
            {badgeItem}
            {showName}
            {showTooltip}
        </div>
    )

}

export default Product