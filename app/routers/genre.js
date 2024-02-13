import { genreController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

router.get('/', genreController.getAllGenres); // pour récupérer tous les genres existants
router.get('/story/:storyId(\\d+)', genreController.getAllGenresOfAStory); // pour récupérer tous les genres associés à une histoire
router.get('/:id(\\d+)', genreController.getOneGenre); // pour récupérer un genre en particulier

export default router;