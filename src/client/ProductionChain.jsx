import * as d3 from 'd3'
import {useEffect, useRef, useState} from "react";
import icons from '../assets/icons.png'

const Chart = ({root, onClickProduct}) => {

    const [svgExtent, setSvgExtent] = useState({width: 100, height: 100})
    const ref = useRef()

    useEffect(() => {

        if (!ref) {
            return
        }

        d3.tree().nodeSize([32, 62]).separation((a, b) => {
            return a.parent === b.parent ? 1.2 : 2.4
        })(root)

        const extent = root.descendants().reduce((total, current) => {
            return {
                x: [Math.min(total.x[0], current.x), Math.max(total.x[1], current.x)],
                y: [Math.min(total.y[0], current.y), Math.max(total.y[1], current.y)]
            }
        }, {
            x: [Infinity, -Infinity],
            y: [Infinity, -Infinity]
        })

        extent.width = extent.x[1] - extent.x[0]
        extent.height = extent.y[1] - extent.y[0]

        setSvgExtent(extent)

        const svg = d3.select(ref.current)

        svg.selectAll("g").remove()
        svg.selectAll("defs").remove()

        const handleClicked = (event, d) => {
            if(d.data.recipe.id === "missing") {
                onClickProduct && onClickProduct(d.data.product)
            }
        }

        const idFor = position => {
            return position[0] + "_" + position[1]
        }

        const x = d => d.data.product.iconPosition[0] * 84
        const y = d => d.data.product.iconPosition[1] * 84

        svg.append("defs")
            .selectAll("clipPath")
            .data(root.descendants())
            .join("clipPath")
            .attr("id", d => idFor(d.data.product.iconPosition))
            .append("rect")
            .attr("width", 80)
            .attr("height", 80)
            .attr("x", x)
            .attr("y", y)


        const g = svg.append("g")
            .attr("transform", "translate(" + ((0 - extent.x[0]) + 32) + ", " + (0 - extent.y[0] + 32) + ")")

        g.append("g")
            .attr("fill", "none")
            .attr("stroke", "lightgrey")
            .attr("stroke-width", 1)
            .selectAll("path")
            .data(root.links())
            .join("path")
            .attr("d", d3.linkVertical().x(d => d.x).y(d => d.y))

        const node = g
            .append("g")
            .selectAll("g")
            .data(root.descendants(), d => d.data.product.id + "/" + d.data.recipe.id)
            .join("g")
            .attr("transform", d => "translate(" + (d.x - 16) + "," + (d.y - 16) + ")")

        node.append("rect")
            .attr("width", 32)
            .attr("height", 32)
            .attr("fill", "white")

        node.append("image")
            .attr("href", icons)
            .attr("transform", d => "scale(0.4) translate(-" + x(d) + ",-" + y(d) + ")")
            .attr("clip-path", d => "url(#" + idFor(d.data.product.iconPosition) + ")")
            .on("click", handleClicked)
            .attr("style", d => d.data.recipe.id === "missing" && "cursor: pointer;")

        node.append("title")
            .text(d => d.data.recipe.name)

        g.append("g")
            .selectAll("g")
            .data(root.descendants().filter(d => d.data.recipe.id === "missing"), d => d.data.product.id + "/" + d.data.recipe.id)
            .join("g")
            .attr("transform", d => "translate(" + (d.x) + ", " + (d.y) + ")")
            .attr("fill", "white")
            .attr("stroke-width", 2)
            .attr("stroke", "darkorange")
            .on("click", handleClicked)
            .append("path")
            .attr("stroke-linecap", "round")
            .attr("stroke-linejoin", "round")
            .attr("d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z")

    }, [root])


    return (<svg ref={ref} style={{width: (svgExtent.width + 64) + "px", height: (svgExtent.height + 64) + "px"}}/>)
}

const ProductionChain = ({roots, onClickProduct}) => {

    const charts = roots.map(root => (
        <div key={root.data.recipe.id}>
            <Chart root={root} onClickProduct={onClickProduct}/>
        </div>
    ))

    return (
        <div className="w-full overflow-auto">
            {charts}
        </div>
    )
}

export default ProductionChain