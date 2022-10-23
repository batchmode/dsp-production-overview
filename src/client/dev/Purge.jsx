import storageClient from "../io/storageClient.js";
import Button from "../ui/Button.jsx";

const Purge = () => {
    const purge = () => {
        storageClient.purge()
        window.location.reload()
    }

    return (
        <Button label="purge" onClick={purge} warning/>
    )
}

export default Purge