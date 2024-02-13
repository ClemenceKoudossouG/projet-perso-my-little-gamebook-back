import { compartmentController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

router.get('/', compartmentController.getAllCompartments); // pour récupérer toutes les cases créées dans une histoire
router.get('/class/:compartmentClassName', compartmentController.getAllCompartmentsByClass); // pour récupérer toutes les cases d'une certaine classe
router.get('/:id(\\d+)', compartmentController.getOneCompartment); // pour récupérer une case en particulier

export default router;