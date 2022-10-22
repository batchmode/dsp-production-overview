const Toggle = ({label, checked, onChange}) => {
    return (
        <label className="relative flex justify-between items-center group text-xs text-violet-600 hover:text-violet-400 cursor-pointer">
            {label}
            <input type="checkbox" checked={checked} onChange={_ => onChange(!checked)}
                   className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"/>
            <span
                className="w-8 h-5 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-violet-500 after:w-3 after:h-3 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-3"/>
        </label>
    )
}

export default Toggle