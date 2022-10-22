const Confirm = ({title, onYes, onNo}) => {

    const handleYes = (e) => {
        e.stopPropagation()
        onYes()
    }

    const handleNo = (e) => {
        e.stopPropagation()
        onNo()
    }

    return (
        <div className="gap-2 flex flex-col bg-white border border-2 rounded border-gray-400 shadow-md">
            <div className="p-2 bg-gray-200 select-none">{title}</div>
            <div className="flex p-2 gap-2">
                <button className="capitalize text-xs group-hover:visible invisible border border-gray-400 rounded-md p-1 hover:bg-gray-200 transition duration-75 ease-in-out"
                        onClick={handleYes}>yes
                </button>
                <button className="capitalize text-xs group-hover:visible invisible border border-gray-400 rounded-md p-1 hover:bg-gray-200 transition duration-75 ease-in-out"
                        onClick={handleNo}>no
                </button>
            </div>
        </div>
    )
}

export default Confirm