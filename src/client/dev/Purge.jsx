import storageClient from "../io/storageClient.js";

const Purge = () => {
    const purge = () => {
        storageClient.purge()
        window.location.reload()
    }

    return (<button className="text-xs text-red-500" onClick={purge}>PURGE</button>)
}

export default Purge