import {useEffect, useState} from "react";
import Input from "./Input.jsx";
import Product from "./Product.jsx";
import Button from "./ui/Button.jsx";

const ProductionRate = ({system, planet, product, onClose, updateModel}) => {
    const [rate, setRate] = useState("")

    useEffect(() => {
        const pr = planet.productionRates.find(r => r.product === product.id)
        pr && setRate(pr.rate)
    }, [planet, product])

    const handleSet = () => {
        updateModel({
            type: "updateProductionRate", payload: {
                systemId: system.id, planetId: planet.id, productId: product.id, rate
            }
        })
        onClose && onClose()
    }

    const handleClear = () => {
        updateModel({
            type: "updateProductionRate", payload: {
                systemId: system.id, planetId: planet.id, productId: product.id, rate: ""
            }
        })
        onClose && onClose()
    }

    const handleCancel = () => {
        setRate(planet.productionRates.find(r => r.product === product.id))
        onClose && onClose()
    }

    return (
        <div className="bg-white border border-1 border-gray-500 rounded-md shadow-md flex flex-col p-2 gap-2">
            <div className="flex gap-2">
                <Product product={product}/>
                <Input value={rate} onChange={setRate} placeholder="production rate" focus/>
                <Button label="set" onClick={handleSet}/>
                <Button label="clear" onClick={handleClear}/>
                <Button label="cancel" onClick={handleCancel}/>
            </div>
        </div>
    )
}

export default ProductionRate