import { peliculas } from "../data/peliculas.js";

const getPeliculas = (req, res) => {
    let resultado = [...peliculas];
    const { titulo, director } = req.query;

    if (titulo) {
        resultado = resultado.filter(p =>
            p.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
    }
    if (director) {
        resultado = resultado.filter(p =>
            p.director.toLowerCase().includes(director.toLowerCase())
        );
    }

    res.status(200).json({ msg: "ok", data: resultado });
};

const getPeliculaById = (req, res) => {
    const pelicula = peliculas.find(p => p.id === req.params.id);
    if (!pelicula) return res.status(404).json({ msg: "Película no encontrada" });
    res.status(200).json({ msg: "ok", data: pelicula });
};

const postPelicula = (req, res) => {
    const { titulo, descripcion, director, anio, genero, favorita } = req.body;
    if (!titulo || !descripcion || !director || !anio || !genero) {
        return res.status(400).json({ msg: "Faltan campos obligatorios" });
    }

    const newPelicula = {
        id: (peliculas.length + 1).toString(),
        titulo,
        descripcion,
        director,
        anio,
        genero,
        favorita: favorita || false
    };

    peliculas.push(newPelicula);
    res.status(201).json({ msg: "Película creada", data: newPelicula });
};

const putPelicula = (req, res) => {
    const { id } = req.params;
    const pelicula = peliculas.find(p => p.id === id);
    if (!pelicula) return res.status(404).json({ msg: "Película no encontrada" });

    const { titulo, descripcion, director, anio, genero, favorita } = req.body;
    if (titulo) pelicula.titulo = titulo;
    if (descripcion) pelicula.descripcion = descripcion;
    if (director) pelicula.director = director;
    if (anio) pelicula.anio = anio;
    if (genero) pelicula.genero = genero;
    if (favorita !== undefined) pelicula.favorita = favorita;

    res.status(200).json({ msg: "Película actualizada", data: pelicula });
};

const deletePelicula = (req, res) => {
    const index = peliculas.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ msg: "Película no encontrada" });

    const eliminada = peliculas.splice(index, 1);
    res.status(200).json({ msg: "Película eliminada", data: eliminada[0] });
};

export { getPeliculas, getPeliculaById, postPelicula, putPelicula, deletePelicula };
