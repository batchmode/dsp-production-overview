import {createRef, useEffect} from "react";
import Input from "./Input.jsx";

const Search = ({value, onChange, focus}) => {

    const inputRef = createRef()

    useEffect(() => {
        if(focus && inputRef && inputRef.current) inputRef.current.focus()
    }, [focus, inputRef])

    return (<Input value={value} onChange={onChange} focus={focus} placeholder="SEARCH"/>)
}

export default Search