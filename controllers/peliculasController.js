import Pelicula from "../models/peliculasModel.js";

const getPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.status(200).json({ msg: "ok", data: peliculas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudieron obtener las películas" });
    }
    };

    const getPeliculaById = async (req, res) => {
    try {
        const pelicula = await Pelicula.findById(req.params.id);
        if (!pelicula) return res.status(404).json({ msg: "Película no encontrada" });
        res.status(200).json({ msg: "ok", data: pelicula });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al buscar la película" });
    }
    };

    const postPelicula = async (req, res) => {
    try {
        const pelicula = new Pelicula(req.body);
        const data = await pelicula.save();
        res.status(201).json({ msg: "Película creada", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudo crear la película" });
    }
    };

    const putPelicula = async (req, res) => {
    try {
        const data = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ msg: "Película no encontrada" });
        res.status(200).json({ msg: "Película actualizada", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la película" });
    }
    };

    const deletePelicula = async (req, res) => {
    try {
        const data = await Pelicula.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ msg: "Película no encontrada" });
        res.status(200).json({ msg: "Película eliminada", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar la película" });
    }
};

export { getPeliculas, getPeliculaById, postPelicula, putPelicula, deletePelicula };
