import Button from "./Button.jsx";

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
                <Button label="yes" onClick={handleYes}/>
                <Button label="no" onClick={handleNo}/>
            </div>
        </div>
    )
}

export default Confirm