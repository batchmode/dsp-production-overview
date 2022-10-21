import {useState} from "react";
import Popup from "./Popup.jsx";
import Purge from "./Purge.jsx";
import RawImport from "./RawImport.jsx";

const DevTools = () => {
    const [showDevTools, setShowDevTools] = useState(false)

    if (import.meta.env.PROD) {
        return (<></>)
    }

    const popup = showDevTools
        ? (<Popup>
            <div className="bg-white p-2 gap-2 flex flex-col border-2 rounded-md">
                <Purge/>
                <RawImport/>
                <button className="text-xs cursor-pointer" onClick={_ => setShowDevTools(false)}>close</button>
            </div>
        </Popup>)
        : (<></>)

    return (<>
        <div className="text-xs text-green-500 cursor-pointer" onClick={_ => setShowDevTools(true)}>dev tools</div>
        {popup}
    </>)
}

export default DevTools