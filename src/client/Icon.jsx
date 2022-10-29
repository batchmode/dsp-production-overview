import icons from "../assets/icons.png";

const Icon = ({x, y, size="normal"}) => {

    const left = 4 + (x * (80 + 4))
    const top = 4 + (y * (80 + 4))

    const objectPosition = "-" + left + "px -" + top + "px"

    const scale = size === "normal" ? 0.4 : 0.3
    const width = size === "normal" ? "w-[32px]" : "w-[24px]"
    const height = size === "normal" ? "h-[32px]" : "h-[24px]"

    return (
        <div className={"relative flex items-center justify-center " + width + " " + height}>
            <div className="absolute w-[80px] h-[80px] flex" style={{
                backgroundImage: "url(" + icons + ")",
                backgroundPosition: objectPosition,
                transform: "scale(" + scale + ")"
            }}></div>
        </div>
    )
}

export default Icon