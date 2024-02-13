import { itemController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

router.get('/', itemController.getAllItems); // pour récupérer tous les objets existants
router.get('/action/:actionId(\\d+)', itemController.getAllItemsByAction); // pour récupérer les objets associés à une action spécifique
router.get('/:id(\\d+)', itemController.getOneItem); // pour récupérer un objet en particulier

export default router;