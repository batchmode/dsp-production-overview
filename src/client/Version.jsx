const Version = () => {
    const version = import.meta.env.VITE_COMMIT_SHA

    if (version && version.length > 6) {
        return (<a className="text-xs text-blue-300"
                   href={"https://github.com/batchmode/dsp-production-overview/tree/" + version} target="_blank">{version.substring(0, 7)}</a>)
    } else {
        return <div className="text-xs text-blue-300">undefined</div>
    }

}

export default Version