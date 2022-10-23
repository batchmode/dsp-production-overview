import {useFileImport} from "../io/useFile.js";
import storageClient from "../io/storageClient.js";
import {useState} from "react";
import Button from "../ui/Button.jsx";

const RawImport = () => {

    const [error, setError] = useState(null)

    if (error) throw error

    const handleRawImport = useFileImport(
        file => storageClient.rawImport(file),
        error => setError(error))


    return (
        <Button label="raw import" onClick={handleRawImport}/>
    )
}

export default RawImport