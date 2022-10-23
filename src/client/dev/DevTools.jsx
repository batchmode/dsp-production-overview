import {useState} from "react";
import Popup from "../ui/Popup.jsx";
import Purge from "./Purge.jsx";
import RawImport from "./RawImport.jsx";
import ShowModel from "./ShowModel.jsx";
import Button from "../ui/Button.jsx";

const DevTools = () => {
    const [showDevTools, setShowDevTools] = useState(false)

    if (import.meta.env.PROD) {
        return (<></>)
    }

    const popup = showDevTools
        ? (<Popup>
            <div className="bg-white p-2 gap-2 flex flex-col border-2 border-gray-500 shadow-md rounded-md">
                <Purge/>
                <RawImport/>
                <ShowModel/>
                <Button label="close" onClick={_ => setShowDevTools(false)}/>
            </div>
        </Popup>)
        : (<></>)

    return (<>
        <div className="text-xs text-green-500 cursor-pointer" onClick={_ => setShowDevTools(true)}>dev tools</div>
        {popup}
    </>)
}

export default DevTools