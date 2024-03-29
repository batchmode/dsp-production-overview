import Product from "./Product.jsx";
import {Tab, TabPane} from "./ui/TabPane.jsx";
import {useState} from "react";
import Search from "./Search.jsx";
import Button from "./ui/Button.jsx";

const SelectProducts = ({planet, title, products, allProducts, config, onSave, onCancel}) => {

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
        if (!filter || filter.length === 0) return true

        return item.name.toLowerCase().includes(filter.toLowerCase())
    }

    const searchBar = (
        <div className="flex gap-2">
            <Search value={filter} onChange={setFilter} focus/>
            <Button label="save" onClick={handleClickSave}/>
            <Button label="cancel" onClick={handleClickCancel}/>
        </div>
    )

    const tabs = config.map(c => {
        const productItems = allProducts.filter(c.filter).filter(filtered).map(p => (
            <div key={p.id} className="hover:bg-blue-200 rounded-md" onClick={e => handleClickAdd(e, p)}>
                <Product key={p.id} product={p}/>
            </div>
        ))

        return (<Tab key={c.title} label={c.title}>
            <div className="flex flex-wrap gap-1">{productItems}</div>
        </Tab>)

    })


    return (
        <div
            className="border border-1 rounded-md border-gray-500 shadow-xl bg-white block w-[570px] flex-col flex-wrap gap-1">
            <div className="p-1 mb-1 font-semibold bg-gray-200 flex-none flex items-center rounded-t-md">
                <button className="capitalize text-xs hover:text-blue-400 p-1 transition duration-75 ease-in-out" onClick={handleClickCancel}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </button>
                <div className="text-sm">{planet?.name} - {title}</div>
            </div>
            <div
                className="mt-2 ml-2 mr-2 p-2 pt-2 pb-1 flex flex-wrap gap-1 min-h-[46px] min-w-[52px]">
                {selectedProductItems}
            </div>
            <TabPane toolbar={searchBar}>
                {tabs}
            </TabPane>
        </div>
    )
}

export default SelectProducts