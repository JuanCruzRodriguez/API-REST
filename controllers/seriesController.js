import { series } from "../data/series.js";

const getSeries = (req, res) => {
    res.status(200).json({ msg: "ok", data: series });
};

const getSerieById = (req, res) => {
    const serie = series.find(s => s.id === req.params.id);
    if (!serie) return res.status(404).json({ msg: "Serie no encontrada" });
    res.status(200).json({ msg: "ok", data: serie });
};

const postSerie = (req, res) => {
    const { titulo, descripcion, director, anio, genero, temporadas, favorita } = req.body;
    if (!titulo || !descripcion || !director || !anio || !genero || !temporadas) {
        return res.status(400).json({ msg: "Faltan campos obligatorios" });
    }
    const nuevaSerie = {
        id: String(series.length + 1),
        titulo,
        descripcion,
        director,
        anio,
        genero,
        temporadas,
        favorita: favorita || false
    };
    series.push(nuevaSerie);
    res.status(201).json({ msg: "Serie creada", data: nuevaSerie });
};

const putSerie = (req, res) => {
    const serie = series.find(s => s.id === req.params.id);
    if (!serie) return res.status(404).json({ msg: "Serie no encontrada" });

    Object.assign(serie, req.body);
    res.status(200).json({ msg: "Serie actualizada", data: serie });
};

const deleteSerie = (req, res) => {
    const index = series.findIndex(s => s.id === req.params.id);
    if (index === -1) return res.status(404).json({ msg: "Serie no encontrada" });
    const eliminada = series.splice(index, 1);
    res.status(200).json({ msg: "Serie eliminada", data: eliminada[0] });
};

export { getSeries, getSerieById, postSerie, putSerie, deleteSerie };
