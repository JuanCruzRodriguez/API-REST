import express from "express";
import { 
    getPeliculas, 
    getPeliculaById, 
    postPelicula, 
    putPelicula, 
    deletePelicula 
} from "../controllers/peliculasController.js";

const router = express.Router();

router.get("/", getPeliculas);

router.get("/:id", getPeliculaById);

router.post("/", postPelicula);

router.put("/:id", putPelicula);

router.delete("/:id", deletePelicula);

export default router;
