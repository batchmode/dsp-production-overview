import {useState} from "react";
import romanNumeral from 'roman-numeral'
import Button from "./ui/Button.jsx";

const AddPlanet = ({system, updateModel}) => {

    const [adding, setAdding] = useState(false)
    const [name, setName] = useState("")

    if (!name || name.length === 0) {
        setName(system.name + " " + romanNumeral.convert(system.planets.length + 1))
    }


    const handleAdd = () => {
        updateModel({type: 'addPlanet', payload: {name: name, systemId: system.id}})
        setName("")
        setAdding(false)
    }

    const handleCancel = () => {
        setName("")
        setAdding(false)
    }

    let content

    if (adding) {
        content = (<label className="flex gap-1 text-sm">
            <input type="text" className="border border-1 border-gray-400 focus:outline-none focus:border-2 placeholder:italic placeholder:text-xs pl-2 placeholder-blue-400"
                   value={name} onChange={e => setName(e.target.value)} placeholder="NAME"/>
            <Button label="add" onClick={handleAdd}/>
            <Button label="cancel" onClick={handleCancel}/>
        </label>)
    } else {
        content = (
            <Button label="add planet" onClick={_ => setAdding(true)}/>
        )
    }


    return content
}

export default AddPlanet