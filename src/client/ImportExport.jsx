import storageClient from "./io/storageClient.js";
import {useState} from "react";
import {useFileExport, useFileImport} from "./io/useFile.js";

const ImportExport = ({updateModel}) => {

    const [error, setError] = useState(null)

    const handleImport = useFileImport(json => {
            storageClient.import(json);
            storageClient.import(json)
            updateModel({type: 'reload'})
        },
        error => setError(error)
    )

    const handleExport = useFileExport()

    if (error) throw error



    return (
        <div className="flex gap-2">
            <button className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
                    onClick={handleImport}>Import
            </button>
            <button className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
                    onClick={_ => handleExport(storageClient.export())}>Export
            </button>
        </div>
    )
}

export default ImportExport