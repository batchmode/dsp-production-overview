import Product from "./Product.jsx";

const Products = ({model, filter}) => {

    if (!model) {
        return (<div>Loading...</div>)
    }

    const filtered = s => {
        if (!filter) {
            return true
        }

        return s.name.toLowerCase().includes(filter.toLowerCase())
    }


    const items = model.products.filter(filtered).map(s => {

        return (
            <li key={s.id} className="p-1 hover:text-blue-400 transition duration-75 ease-in-out cursor-pointer flex gap-2 text-sm flex items-center">
                <Product product={s} name/>
            </li>
        )
    })


    return (<div className="p-2">
        <ul className="flex gap-2 flex-col">{items}</ul>
    </div>)
}

export default Products