const Sidebar = ({open, children, onClose}) => {

    const minWidth = open ? "20vw" : 0
    const maxWidth = open ? "70vw" : 0
    const display = open ? "block" : "none"

    const background = open ? (
        <div className="fixed bg-gray-800 opacity-70 z-40 left-0 top-0 right-0 bottom-0"
             onClick={onClose}/>
    ) : (
        <></>
    )

    return (<div>
        {background}
        <div
            className="mt-2 mb-2 fixed right-0 top-0 bottom-0 transition-[width] duration-500 shadow-sm border border-gray-500 rounded-md z-50 bg-white"
            style={{minWidth, maxWidth, display}}>
            {children}
        </div>
    </div>)
}

export default Sidebar