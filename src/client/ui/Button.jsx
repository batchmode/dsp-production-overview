const Button = ({label, onClick, warning}) => {

    const className = warning
        ? "uppercase text-xs text-red-500 bg-white border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
        : "capitalize text-xs text-blue-400 bg-white border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"

    return (
        <button className={className}
                onClick={onClick}>{label}
        </button>
    )
}

export default Button