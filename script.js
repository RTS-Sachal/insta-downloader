<script>
async function downloadVideo() {
    let url = document.getElementById("instaUrl").value;

    let api = "https://api.allorigins.win/raw?url=" + encodeURIComponent(
        "https://snapinsta.app/action.php?url=" + url
    );

    try {
        let res = await fetch(api);
        let data = await res.text();
        alert("Processing... (Real implementation needs parsing)");
    } catch (e) {
        alert("Error fetching video");
    }
}
</script>
