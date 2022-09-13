import {useState} from "react";

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
            <button className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
                    onClick={handleAdd}>add
            </button>
            <button className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
                    onClick={handleCancel}>cancel
            </button>
        </label>)
    } else {
        content = (<button className="capitalize text-xs text-blue-400 p-1 border border-1 border-gray-400 rounded hover:bg-gray-200"
                           onClick={_ => setAdding(true)}>add system</button>)
    }

    return content
}

export default AddSystem