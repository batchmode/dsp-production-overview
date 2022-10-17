const Overlay = ({children}) => {

    return (<div className="static">
        <div
            className="absolute left-0 top-0 w-full h-full z-40 bg-gray-600 opacity-30 flex items-center justify-center">
        </div>
        <div className="absolute z-50 left-10 top-10 right-10 bottom-10 bg-white rounded-md border border-1 border-gray-500 shadow-md">
            {children}
        </div>
    </div>)

}

export default Overlay