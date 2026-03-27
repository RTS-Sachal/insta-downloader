async function download() {
    const url = document.getElementById("url").value;
    const result = document.getElementById("result");

    if (!url) {
        alert("Enter URL");
        return;
    }

    result.innerHTML = "Fetching...";

    try {
        const res = await fetch(`/api/download?url=${encodeURIComponent(url)}`);
        const data = await res.json();

        if (data.video) {
            result.innerHTML = `
                <video controls src="${data.video}"></video>
                <a class="download-btn" href="${data.video}" download>Download Video</a>
            `;
        } else {
            result.innerHTML = "Failed to fetch video.";
        }

    } catch (err) {
        result.innerHTML = "Error occurred.";
    }
}