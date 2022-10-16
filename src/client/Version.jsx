import {FaGithub} from "react-icons/all";


const Version = () => {
    const version = import.meta.env.VITE_COMMIT_SHA || "develop"

    return (<a className="text-blue-400"
               href={"https://github.com/batchmode/dsp-production-overview/tree/" + version}
               target="_blank">
        <div className="flex gap-1 items-center">
            <FaGithub/>
            <div className="text-xs">{version.substring(0, 7)}</div>
        </div>
    </a>)

}

export default Version