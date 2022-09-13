import icons from "../assets/icons.png";

const Icon = ({x, y}) => {

    const left = 4 + (x * (80 + 4))
    const top = 4 + (y * (80 + 4))

    const objectPosition = "-" + left + "px -" + top + "px"

    return (
        <div className="relative w-[32px] h-[32px] flex items-center justify-center">
            <div className="absolute w-[80px] h-[80px] flex" style={{backgroundImage: "url(" + icons + ")", backgroundPosition: objectPosition, transform: "scale(0.4)"}}></div>
        </div>
    )
}

export default Icon