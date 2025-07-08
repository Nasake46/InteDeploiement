import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Hack pour utiliser __dirname avec ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sert les fichiers du frontend
app.use(express.static(path.join(__dirname, "../../frontend")));

// Fallback : index.html (pour React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
