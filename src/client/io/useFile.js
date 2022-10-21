const useFileImport = (onFile, onError) => {

    return () => {
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
                            onFile && onFile(JSON.parse(event.target.result))
                        } catch (error) {
                            onError && onError(error)
                        }
                    }
                });
                reader.readAsText(file);
            }
            document.body.removeChild(input);
        });
        input.click();
    }

}

const useFileExport = () => {

    return (data) => {
        const json = JSON.stringify(data, null, 2)
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

}

export {useFileImport, useFileExport}