import {useState} from "react";
import Popup from "./ui/Popup.jsx";
import Confirm from "./ui/Confirm.jsx";

const DeletePlanet = ({system, planet, updateModel}) => {

    const [showConfirm, setShowFomfirm] = useState(false)

    const handleDelete = () => {
        setShowFomfirm(true)
    }

    const handleYes = () => {
        updateModel({type: 'deletePlanet', payload: {id: planet.id, systemId: system.id}})
        setShowFomfirm(false)
    }

    const handleNo = () => {
        setShowFomfirm(false)
    }

    const confirm = showConfirm ? (<Popup relative><Confirm title="Really?" onYes={handleYes} onNo={handleNo}/></Popup>) : (<></>)

    return (
        <>
            <button className="capitalize text-xs hover:text-blue-400 rounded-md p-1 transition duration-75 ease-in-out"
                    onClick={handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </button>
            {confirm}
        </>
    )
}

export default DeletePlanet