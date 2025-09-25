import express from "express";
import { getSeries, getSerieById, postSerie, putSerie, deleteSerie } from "../controllers/seriesController.js";

const router = express.Router();

router.get("/", getSeries);
router.get("/:id", getSerieById);
router.post("/", postSerie);
router.put("/:id", putSerie);
router.delete("/:id", deleteSerie);

export default router;
