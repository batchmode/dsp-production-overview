import {createRef, useEffect} from "react";

const Input = ({value, onChange, placeholder, focus}) => {

    const inputRef = createRef()

    useEffect(() => {
        if(focus && inputRef && inputRef.current) inputRef.current.focus()
    }, [focus, inputRef])

    return (<label className="flex gap-1 text-sm">
        <input ref={inputRef} type="text" className="border border-1 border-gray-400 focus:outline-none focus:border-2 placeholder:italic placeholder:text-xs pl-2 placeholder-blue-400"
               value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}/>
    </label>)
}

export default Input