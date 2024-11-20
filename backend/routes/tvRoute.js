import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
	getSimilarTvs,
	getTrendingTv,
	getTvDetails,
	getTvsByCategory,
	getTvTrailers,
} from "../controllers/tvController.js";

const router = express.Router();

router.get("/trending",protectRoute, getTrendingTv);
router.get("/:id/trailers",protectRoute, getTvTrailers);
router.get("/:id/details",protectRoute, getTvDetails);
router.get("/:id/similar",protectRoute, getSimilarTvs);
router.get("/:category",protectRoute, getTvsByCategory);

export default router;