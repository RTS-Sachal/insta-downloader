async function download() {
    const url = document.getElementById("url").value;
    const result = document.getElementById("result");

    if (!url) {
        alert("Enter URL");
        return;
    }

    result.innerHTML = "Fetching...";

    try {
        const res = await fetch(`https://api.vreden.my.id/api/igdl?url=${encodeURIComponent(url)}`);
        const data = await res.json();

        if (data.result && data.result.length > 0) {
            let video = data.result[0].url;

            result.innerHTML = `
                <video controls src="${video}"></video>
                <a href="${video}" download>Download Video</a>
            `;
        } else {
            result.innerHTML = "Failed.";
        }

    } catch (err) {
        result.innerHTML = "Error.";
    }
}
