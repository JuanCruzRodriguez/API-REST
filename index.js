import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routerAPI from "./routers/index.js";

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname, "public")));

routerAPI(app);

app.use((req, res) => {
    res.status(404).json({ message: "Endpoint no encontrado" });
});

app.listen(PORT, () => {
    console.log(`🟢 API de Películas corriendo en http://localhost:${PORT}`);
});
