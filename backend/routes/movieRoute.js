import express from "express";


import {
	getMovieDetails,
	getMoviesByCategory,
	getMovieTrailers,
	getSimilarMovies,
	getTrendingMovie,
} from "../controllers/movieController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/trending",protectRoute, getTrendingMovie);
router.get("/:id/trailers",protectRoute, getMovieTrailers);
router.get("/:id/details",protectRoute, getMovieDetails);
router.get("/:id/similar",protectRoute, getSimilarMovies);
router.get("/:category",protectRoute, getMoviesByCategory);

export default router;