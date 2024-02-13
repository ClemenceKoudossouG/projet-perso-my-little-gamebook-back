import { placeController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

router.get('/', placeController.getAllPlaces); // pour récupérer tous les lieux existants
router.get('/world/:worldId(\\d+)', placeController.getAllPlacesByWorld); // pour récupérer tous les lieux existants par univers
router.get('/:id(\\d+)', placeController.getOnePlace); // pour récupérer un lieu en particulier

export default router;