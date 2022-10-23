import storageClient from "./io/storageClient.js";
import {useState} from "react";
import {useFileExport, useFileImport} from "./io/useFile.js";
import Button from "./ui/Button.jsx";

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
            <Button label="import" onClick={handleImport}/>
            <Button label="export" onClick={_ => handleExport(storageClient.export())}/>
        </div>
    )
}

export default ImportExport