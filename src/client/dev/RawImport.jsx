import {useFileImport} from "../io/useFile.js";
import storageClient from "../io/storageClient.js";
import {useState} from "react";

const RawImport = () => {

    const [error, setError] = useState(null)

    if(error) throw error

    const handleRawImport = useFileImport(
        file => storageClient.rawImport(file),
        error => setError(error))


    return (<div className="text-xs cursor-pointer" onClick={handleRawImport}>raw import</div>)
}

export default RawImport