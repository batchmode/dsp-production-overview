import Button from "../ui/Button.jsx";
import {useState} from "react";
import Overlay from "../ui/Overlay.jsx";
import SelectProducts from "../SelectProducts.jsx";
import Popup from "../ui/Popup.jsx";
import Product from "../Product.jsx";

export const CreateRecipe = ({model}) => {

    const [showOverlay, setShowOverlay] = useState(false)

    const [idValue, setIdValue] = useState("")
    const [nameValue, setNameValue] = useState("")

    const [showInputSelection, setShowInputSelection] = useState(false)
    const [showOutputSelection, setShowOutputSelection] = useState(false)
    const [showIconSelection, setShowIconSelection] = useState(false)

    const [inputs, setInputs] = useState([])
    const [outputs, setOutputs] = useState([])
    const [icon, setIcon] = useState([])


    const onSetInputs = (p) => {
        setInputs(p)
        setShowInputSelection(false)
    }

    const onSetOutputs = (p) => {
        setOutputs(p)
        setShowOutputSelection(false)
    }

    const onSetIcon = (p) => {
        setIcon(p)
        setShowIconSelection(false)
    }

    const onCancel = () => {
        setShowInputSelection(false)
        setShowOutputSelection(false)
        setShowIconSelection(false)
    }

    const onAutoId = () => {
        if(outputs.length > 0) {
            setIdValue(outputs[0].id)
        }
    }

    const onAutoName = () => {
        if(outputs.length > 0) {
            let name = outputs[0].id.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")
            setNameValue(name)
        }
    }

    const onClear = () => {
        setIdValue("")
        setNameValue("")
        setInputs([])
        setOutputs([])
        setIcon([])
    }

    const productSelectionConfig = [
        {
            title: 'Products',
            filter: p => p.category !== 'building' && p.category !== 'recipe'
        }, {
            title: 'Buildings',
            filter: p => p.category === 'building' && p.category !== 'recipe'
        }
    ]

    const inputSelection = showInputSelection
        ? (
            <Popup>
                <SelectProducts title="Inputs" config={productSelectionConfig} products={inputs}
                                allProducts={model.products} onSave={onSetInputs}
                                onCancel={onCancel}/>
            </Popup>
        )
        : (<></>)

    const outputSelection = showOutputSelection
        ? (
            <Popup>
                <SelectProducts title="Outputs" config={productSelectionConfig} products={outputs}
                                allProducts={model.products} onSave={onSetOutputs}
                                onCancel={onCancel}/>
            </Popup>
        )
        : (<></>)

    const iconSelection = showIconSelection
        ? (
            <Popup>
                <SelectProducts title="Icon" config={productSelectionConfig} products={icon}
                                allProducts={model.products} onSave={onSetIcon}
                                onCancel={onCancel}/>
            </Popup>
        )
        : (<></>)

    const inputProductElements = inputs.map(p => <div key={p.id}><Product product={p}/></div>)
    const outputProductElements = outputs.map(p => <div key={p.id}><Product product={p}/></div>)
    const iconElement = icon.length > 0 ? (<Product product={icon[0]}/>) : <></>

    const recipe = {
        id: idValue,
        name: nameValue,
        inputs: inputs.map(i => i.id),
        outputs: outputs.map(o => o.id),
        icon: icon.length > 0 ? icon[0].id : ""
    }
    const recipeJson = JSON.stringify(recipe, null, 2)

    const overlay = showOverlay
        ? (
            <div className="fixed left-0 top-0 right-0 bottom-0">
                <Overlay>
                    <div className="flex flex-col pb-2 rounded-md absolute left-0 right-0 top-0 bottom-0">
                        <div
                            className="p-2 mb-2 font-semibold text-lg bg-gray-200 flex-none flex justify-between items-center rounded-t-md">
                            <div className="flex gap-1 items-center">
                                <button
                                    className="capitalize text-xs hover:text-blue-400 p-1 transition duration-75 ease-in-out"
                                    onClick={_ => setShowOverlay(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col p-2 gap-2">
                            <div className="flex flex-col items-start gap-2">
                                <div className="flex flex-row gap-2">
                                    <input type="text" className="border border-1 border-gray-400 focus:outline-none focus:border-2 placeholder:italic placeholder:text-xs pl-2 placeholder-blue-400"
                                           value={idValue} onChange={e => setIdValue(e.target.value)} placeholder="ID"/>
                                    <Button label="S" onClick={onAutoId}/>
                                    <input type="text" className="border border-1 border-gray-400 focus:outline-none focus:border-2 placeholder:italic placeholder:text-xs pl-2 placeholder-blue-400"
                                           value={nameValue} onChange={e => setNameValue(e.target.value)} placeholder="NAME"/>
                                    <Button label="S" onClick={onAutoName}/>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <Button label="Inputs" onClick={() => setShowInputSelection(true)}/>
                                    {inputProductElements}
                                </div>
                                <div className="flex flex-row gap-2">
                                    <Button label="Outputs" onClick={() => setShowOutputSelection(true)}/>
                                    {outputProductElements}
                                </div>
                                <div className="flex flex-row gap-2">
                                    <Button label="Icon" onClick={() => setShowIconSelection(true)}/>
                                    {iconElement}
                                </div>
                                {inputSelection}
                                {outputSelection}
                                {iconSelection}
                                <Button label={"Clear"} onClick={onClear}/>
                            </div>
                            <div className="relative flex-1 border-[1px]">
                                    <textarea id="w3review" name="w3review"
                                              className="w-full h-full"
                                              value={recipeJson}/>
                            </div>
                        </div>
                    </div>
                </Overlay>
            </div>
        )
        :
        (<></>)


    return (
        <>
            <Button label="Create Recipe" onClick={_ => setShowOverlay(true)}/>
            {overlay}
        </>
    )
}