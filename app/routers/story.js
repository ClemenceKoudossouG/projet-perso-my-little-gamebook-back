import { storyController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

router.get('/', storyController.getAllStories); // pour récupérer toutes les histoires partagées
router.get('/genre/:genreId(\\d+)', storyController.getAllStoriesByGenre); // pour récupérer toutes les histoires partagées par genre
router.get('/level/:levelId(\\d+)', storyController.getAllStoriesByLevel); // pour récupérer toutes les histoires partagées par niveau
router.get('/:id(\\d+)', storyController.getOneStory); // pour récupérer une histoire en particulier

export default router;