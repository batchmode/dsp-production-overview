import React from "react";
import DevTools from "./dev/DevTools.jsx";

class HandleError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, message: ""};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, message: error.message};
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="m-4 flex flex-col items-center p-2 gap-2 border rounded border-2 border-gray-200">
                    <h1 className="text-2xl font-bold">Something went wrong.</h1>

                    <div className="flex items-start gap-2">
                        <div>Error:</div>
                        <div className="text-orange-500">{this.state.message}</div>
                    </div>
                    <button className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200 flex gap-1 items-center" onClick={_ => window.location.reload()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                        </svg>
                        <div>Reload Page</div>
                    </button>
                    <DevTools/>
                </div>
            );
        }

        return this.props.children;
    }
}

export default HandleError