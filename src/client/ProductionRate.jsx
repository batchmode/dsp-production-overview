import {useState} from "react";
import Input from "./Input.jsx";
import Product from "./Product.jsx";

const ProductionRate = ({planet, product, onClose}) => {
    const [rate, setRate] = useState("")

    const handleSet = () => {
        onClose && onClose()

    }

    const handleCancel = () => {
        onClose && onClose()
    }

    return (
        <div className="bg-white border border-1 border-gray-500 rounded-md shadow-md flex flex-col p-2 gap-2">
            <div className="flex gap-2">
                <Product product={product}/>
                <Input value={rate} onChange={setRate} placeholder="production rate"/>
                <button className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
                        onClick={handleSet}>set
                </button>
                <button className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
                        onClick={handleCancel}>cancel
                </button>
            </div>
        </div>
    )
}

export default ProductionRate