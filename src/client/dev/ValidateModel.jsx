import Button from "../ui/Button.jsx";
import {useState} from "react";
import Overlay from "../ui/Overlay.jsx";
import storageClient from "../io/storageClient.js";
import {versionOf} from "../io/validation.js";
import {parse} from "../io/migration.js";

const ValidateModel = () => {
    const [showOverlay, setShowOverlay] = useState(false)
    const [value, setValue] = useState("")
    const [message, setMessage] = useState("")

    const onClickLoadModel = _ => {
        setValue(JSON.stringify(JSON.parse(storageClient.rawExport()), null, 2))
    }

    const onClickClear = _ => {
        setValue("")
    }

    const onClickValidate = _ => {
        try {
            const json = JSON.parse(value);
            const version = versionOf(json)
            try {
                parse(json)
                setMessage("Version: " + version + " valid")
            } catch (error) {
                setMessage("Version: " + version + " invalid - Error: " + error)
            }

        } catch (error) {
            setMessage("Error: " + error)
        }
    }

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
                        <div className="w-full h-full flex flex-col p-2">
                            <div className="relative flex-1 border-[1px]">
                                <label>
                                    <textarea id="w3review" name="w3review"
                                              className="absolute left-2 top-1 right-2 bottom-1"
                                              value={value} onChange={e => setValue(e.target.value)}/>
                                </label>
                            </div>
                            <div className="pt-2 flex justify-end gap-2">
                                <div className="flex-1">{message}</div>
                                <Button label="load model" onClick={onClickLoadModel}/>
                                <Button label="clear" onClick={onClickClear}/>
                                <Button label="validate" onClick={onClickValidate}/>
                            </div>
                        </div>
                    </div>
                </Overlay>
            </div>
        )
        :
        (<></>)

    return (<>
        <Button label="Validation" onClick={_ => setShowOverlay(true)}/>
        {overlay}
    </>)
}

export default ValidateModel