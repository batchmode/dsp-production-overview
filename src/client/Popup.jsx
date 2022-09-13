const Popup = ({children, relative}) => {

    const outerClass = relative ? "relative" : "static"
    const contentClass = relative ? "absolute z-50 left-10 top-[-4em]" : "fixed z-50 left-20 top-20"

    return (
        <div className={outerClass}>
            <div
                className="fixed left-0 top-0 w-full h-full z-40 bg-gray-600 opacity-30 flex items-center justify-center">
            </div>
            <div className={contentClass}>{children}</div>
        </div>
    )
}

export default Popup