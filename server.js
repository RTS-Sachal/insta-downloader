const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/download", async (req, res) => {
    try {
        const { url } = req.body;

        // Using a public API workaround
        const api = `https://snapinsta.app/action.php?url=${encodeURIComponent(url)}`;

        const response = await fetch(api);
        const text = await response.text();

        // VERY basic extraction (not perfect)
        const match = text.match(/https?:\/\/[^"]+\.mp4/g);

        if (match) {
            res.json({ video: match[0] });
        } else {
            res.json({ error: "Video not found" });
        }

    } catch (err) {
        res.json({ error: "Server error" });
    }
});

app.listen(3000, () => console.log("Server running"));
