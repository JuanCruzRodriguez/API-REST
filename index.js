import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routerAPI from "./routers/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;

app.use(express.json());
app.use("/", express.static("public"));

mongoose.connect(URI_DB);
const db = mongoose.connection;

db.on("error", () => console.error("❌ No se pudo conectar a MongoDB"));
db.once("open", () => console.log("✅ Conectado correctamente a MongoDB"));

routerAPI(app);

app.listen(PORT, () => {
    console.log(`🟢 API corriendo en http://localhost:${PORT}`);
});
