import storageClient from "./storageClient.js";

const ImportExport = ({updateModel}) => {

    const handleImport = () => {
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.style.display = "none";
        input.type = "file";
        input.addEventListener("change", function () {
            if (this.files) {
                const file = this.files[0];
                const reader = new FileReader();
                reader.addEventListener("load", (event) => {
                    if (event.target && event.target.result) {
                        try {
                            const json = JSON.parse(event.target.result)
                            storageClient.import(json)
                            updateModel({type: 'reload'})
                        } catch (error) {
                            alert(
                                `Invalid import file: ${
                                    error instanceof Error ? error.message : "Uknown error"
                                }`,
                            );
                        }
                    }
                });
                reader.readAsText(file);
            }
            document.body.removeChild(input);
        });
        input.click();
    }

    const handleExport = () => {
        const json = JSON.stringify(storageClient.export(), null, 2)
        const url = URL.createObjectURL(
            new Blob([json], {type: "application/json"}),
        )
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style.display = "none";
        a.href = url;
        a.download = "dsp-overview.json";
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    return (
        <div className="flex gap-2">
            <button className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
                    onClick={handleImport}>Import
            </button>
            <button className="capitalize text-xs text-blue-400 border border-1 border-gray-400 rounded p-1 hover:bg-gray-200"
                    onClick={handleExport}>Export
            </button>
        </div>
    )
}

export default ImportExport