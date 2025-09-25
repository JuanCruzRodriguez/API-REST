import mongoose from "mongoose";

const serieSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    genero: { type: String, required: true },
    temporadas: { type: Number, required: true },
    favorita: { type: Boolean, default: false }
});

export default mongoose.model("Serie", serieSchema);
