import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const API_KEY = process.env.VITE_API_KEY; // Use process.env for environment variables in Node.js

app.get("/news", async (req, res) => {
    try {
        const category = req.query.category || "general";
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

        const response = await axios.get(url);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
