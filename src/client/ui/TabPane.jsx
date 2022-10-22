import {useState} from "react";

const Tab = (props) => {
    return (<>{props.children}</>)
}

const TabPane = ({children, toolbar}) => {

    const [selected, setSelected] = useState(0)

    const childComponents = children && (children.props && [children]) || children || []
    const labels = childComponents.map(c => c.props.label)

    const buttons = labels.map((l, i) => {
        if (i === selected) {
            return (<button key={i} className="text-base text-blue-500 bg-white p-1 hover:text-blue-400 transition duration-75 ease-in-out" onClick={_ => setSelected(i)}>{l}</button>)
        } else {
            return (<button key={i} className="text-sm text-gray-600 bg-white p-1 hover:text-blue-400 transition duration-75 ease-in-out" onClick={_ => setSelected(i)}>{l}</button>)
        }
    })
    const selectedPane = childComponents[selected]
    const toolbarItem = selectedPane.props.toolbar ? selectedPane.props.toolbar : (<></>)

    return (
        <div className="flex flex-col gap-2 pl-2 pr-2 pt-0 pb-2 min-h-0">
            <div className="bg-white pl-2 pt-2 flex items-center gap-2">
                {buttons}
                <div className="pl-4">{toolbarItem}</div>
                <div className="pr-4 ml-auto">{toolbar}</div>
            </div>
            <div className="p-2 border-2 rounded-md overflow-auto min-h-0">
                {selectedPane}
            </div>
        </div>
    )

}

export {Tab, TabPane}