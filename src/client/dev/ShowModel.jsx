import {useState} from "react";
import Overlay from "../ui/Overlay.jsx";
import storageClient from "../io/storageClient.js";

const ShowModel = () => {
    const [showData, setShowData] = useState(false)

    const overlay = showData
        ? (
            <div className="fixed left-0 top-0 right-0 bottom-0">
                <Overlay>
                    <div className="flex flex-col pb-2 rounded-md absolute left-0 right-0 top-0 bottom-0">
                        <div className="p-2 mb-2 font-semibold text-lg bg-gray-200 flex-none flex justify-between items-center rounded-t-md">
                            <div className="flex gap-1 items-center">
                                <button className="capitalize text-xs hover:text-blue-400 p-1 transition duration-75 ease-in-out" onClick={_ => setShowData(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="overflow-auto w-full">
                            <div className="whitespace-pre flex p-2">
                                {JSON.stringify(JSON.parse(storageClient.rawExport()), null, 2)}
                            </div>
                        </div>
                    </div>
                </Overlay>
            </div>
        )
        : (<></>)


    return (<>
        <div className="text-xs cursor-pointer" onClick={_ => setShowData(true)}>show data</div>
        {overlay}
    </>)
}

export default ShowModel