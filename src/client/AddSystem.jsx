import {useState} from "react";
import Button from "./ui/Button.jsx";

const AddSystem = ({updateModel}) => {

    const [adding, setAdding] = useState(false)
    const [name, setName] = useState("")

    const handleAdd = () => {
        updateModel({type: 'addSystem', payload: {name: name}})
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
            <Button label="add system" onClick={_ => setAdding(true)}/>
        )
    }

    return content
}

export default AddSystem