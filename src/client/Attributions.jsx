const Bullet = () => {
    return (<div className="w-1 h-1 rounded-full bg-blue-300"></div>)
}

const NoWrap = ({children}) => {
    return (<div className="whitespace-nowrap">{children}</div>)
}


const Attributions = () => {
    return (
        <div className="text-xs text-blue-400 flex gap-1 items-center">
            <NoWrap>inspired by</NoWrap>
            <a href="https://factoriolab.github.io/next" target="_blank">FactorioLab</a>
            <Bullet/>
            <NoWrap>built with</NoWrap>
            <a href="https://reactjs.org" target="_blank">React</a>
            <NoWrap>and</NoWrap>
            <a href="https://vitejs.dev" target="_blank">Vite</a>
            <Bullet/>
            <a href="https://tailwindcss.com" target="_blank">Tailwindcss</a>
            <Bullet/>
            <a href="https://heroicons.com" target="_blank">Heroicons</a>
            <Bullet/>
            <a href="https://fontawesome.com" target="_blank">Fontawesome</a>
            <Bullet/>
            <NoWrap>visit <a href="https://store.steampowered.com/app/1366540/Dyson_Sphere_Program/" target="_blank">Dyson Sphere Program on Steam!</a></NoWrap>
        </div>
    )
}

export default Attributions