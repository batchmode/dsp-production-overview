import Product from "./Product.jsx";
import {Tab, TabPane} from "./TabPane";
import {useState} from "react";
import Search from "./Search.jsx";

const SelectProducts = ({products, allProducts, onSave, onCancel}) => {

    const [selectedProducts, setSelectedProducts] = useState(products)
    const [filter, setFilter] = useState("")

    const handleClickAdd = (e, p) => {
        e.stopPropagation()
        setSelectedProducts(prev => {

            if (!prev.find(s => s.id === p.id)) {
                const next = prev.slice()
                next.push(p)
                return next
            }

            return prev
        })
    }

    const handleClickSave = e => {
        e.stopPropagation()
        onSave && onSave(selectedProducts)
    }

    const handleClickCancel = e => {
        e.stopPropagation()
        onCancel && onCancel()
    }

    const handleClickRemove = (e, p) => {
        e.stopPropagation()
        setSelectedProducts(prev => prev.filter(s => s.id !== p.id))
    }

    const selectedProductItems = selectedProducts.map(p => (
        <div key={p.id} className="hover:bg-blue-200 rounded-md" onClick={e => handleClickRemove(e, p)}>
            <Product product={p}/>
        </div>
    ))

    const filtered = (item) => {
        if(!filter || filter.length === 0) return true

        return item.name.toLowerCase().includes(filter.toLowerCase())
    }

    const productItems = allProducts.filter(p => !p.isBuilding).filter(filtered).map(p => (
        <div key={p.id} className="hover:bg-blue-200 rounded-md" onClick={e => handleClickAdd(e, p)}><Product key={p.id}
                                                                                                              product={p}/>
        </div>
    ))
    const buildingItems = allProducts.filter(p => p.isBuilding).filter(filtered).map(p => (
        <div key={p.id} className="hover:bg-blue-200 rounded-nd" onClick={e => handleClickAdd(e, p)}><Product key={p.id}
                                                                                                              product={p}/>
        </div>
    ))

    const toolbar = (<div className="flex gap-2">
        <button
            className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
            onClick={handleClickSave}>save
        </button>
        <button
            className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
            onClick={handleClickCancel}>cancel
        </button>
    </div>)

    const searchBar = (<Search value={filter} onChange={setFilter} focus/>)


    return (
        <div
            className="p-2 pt-4 border border-1 rounded border-gray-500 shadow-xl bg-white block w-[570px] flex flex-wrap gap-1">
            <div
                className="mt-2 ml-4 mr-4 p-2 border-gray-200 border border-2 rounded flex flex-wrap gap-1 min-h-[52px] min-w-[52px]">{selectedProductItems}</div>
            <TabPane toolbar={searchBar}>
                <Tab label="Resources" toolbar={toolbar}>
                    <div className="flex flex-wrap gap-1">{productItems}</div>
                </Tab>
                <Tab label="Buildings" toolbar={toolbar}>
                    <div className="flex flex-wrap gap-1">{buildingItems}</div>
                </Tab>
            </TabPane>
        </div>
    )
}

export default SelectProducts