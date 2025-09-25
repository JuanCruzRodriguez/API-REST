import Serie from "../models/seriesModel.js";

const getSeries = async (req, res) => {
    try {
        const series = await Serie.find();
        res.status(200).json({ msg: "ok", data: series });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudieron obtener las series" });
    }
    };

    const getSerieById = async (req, res) => {
    try {
        const serie = await Serie.findById(req.params.id);
        if (!serie) return res.status(404).json({ msg: "Serie no encontrada" });
        res.status(200).json({ msg: "ok", data: serie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al buscar la serie" });
    }
    };

    const postSerie = async (req, res) => {
    try {
        const serie = new Serie(req.body);
        const data = await serie.save();
        res.status(201).json({ msg: "Serie creada", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudo crear la serie" });
    }
    };

    const putSerie = async (req, res) => {
    try {
        const data = await Serie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ msg: "Serie no encontrada" });
        res.status(200).json({ msg: "Serie actualizada", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la serie" });
    }
    };

    const deleteSerie = async (req, res) => {
    try {
        const data = await Serie.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ msg: "Serie no encontrada" });
        res.status(200).json({ msg: "Serie eliminada", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar la serie" });
    }
};

export { getSeries, getSerieById, postSerie, putSerie, deleteSerie };
