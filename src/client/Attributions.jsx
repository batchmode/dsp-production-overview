const Bullet = () => {
    return (<div className="w-1 h-1 rounded-full bg-blue-300"></div>)
}


const Attributions = () => {
    return (
        <div className="text-xs text-blue-400 flex gap-1 items-center">
            <div>inspired by</div>
            <a href="https://factoriolab.github.io/next" target="_blank">FactorioLab</a>
            <Bullet/>
            <div>build using</div>
            <a href="https://reactjs.org" target="_blank">React</a>
            <div>and</div>
            <a href="https://vitejs.dev" target="_blank">Vite</a>
            <Bullet/>
            <a href="https://tailwindcss.com" target="_blank">Tailwindcss</a>
            <Bullet/>
            <a href="https://heroicons.com" target="_blank">Heroicons</a>
            <Bullet/>
            <a href="https://fontawesome.com" target="_blank">Fontawesome</a>
            <Bullet/>
        </div>
    )
}

export default Attributions