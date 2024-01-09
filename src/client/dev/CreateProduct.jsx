import Button from "../ui/Button.jsx";
import {useState} from "react";
import Overlay from "../ui/Overlay.jsx";
import icons from "../../assets/icons.png";

const ICON_SIZE = 40

export const CreateProduct = () => {

    const [showOverlay, setShowOverlay] = useState(false)
    const [iconPosition, setIconPosition] = useState([0, 0])

    const [idValue, setIdValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [categoryValue, setCategoryValue] = useState("")


    const onImgClick = (e) => {
        const r = e.target.getBoundingClientRect()
        const x = Math.floor((e.pageX - r.left) / ICON_SIZE)
        const y = Math.floor((e.pageY - r.top) / ICON_SIZE)
        setIconPosition([x, y])
    }

    const productJson = JSON.stringify(
        {
            id: idValue,
            name: nameValue,
            iconPosition
        }
        , null, 2)

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
                        <div className="w-full h-full flex flex-col p-2 gap-2 overflow-auto">
                            <div className="flex flex-row gap-2">
                                <input type="text" className="border border-1 border-gray-400 focus:outline-none focus:border-2 placeholder:italic placeholder:text-xs pl-2 placeholder-blue-400"
                                       value={idValue} onChange={e => setIdValue(e.target.value)} placeholder="ID"/>
                                <input type="text" className="border border-1 border-gray-400 focus:outline-none focus:border-2 placeholder:italic placeholder:text-xs pl-2 placeholder-blue-400"
                                       value={nameValue} onChange={e => setNameValue(e.target.value)} placeholder="NAME"/>
                                <input type="text" className="border border-1 border-gray-400 focus:outline-none focus:border-2 placeholder:italic placeholder:text-xs pl-2 placeholder-blue-400"
                                       value={categoryValue} onChange={e => setCategoryValue(e.target.value)} placeholder="CATEGORY"/>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <img src={icons + ""} alt="icons" className="w-[480px] border-2" onClick={onImgClick}/>
                            </div>
                            <div className="relative flex-1 border-[1px]">
                                    <textarea id="w3review" name="w3review"
                                              className="w-full h-full"
                                              value={productJson}/>
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
            <Button label="Create Product" onClick={_ => setShowOverlay(true)}/>
            {overlay}
        </>
    )
}