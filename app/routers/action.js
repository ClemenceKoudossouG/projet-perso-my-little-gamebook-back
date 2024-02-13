import { actionController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

router.get('/', actionController.getAllActions); // pour récupérer toutes les actions existantes
router.get('/npc/:npcId(\\d+)', actionController.getAllActionsByNpc); // pour récupérer toutes les actions associées à un personnage spécifique
router.get('/item/:itemId(\\d+)', actionController.getAllActionsByItem); // pour récupérer toutes les actions associées à un objet spécifique
router.get('/class/:actionClassName', actionController.getAllActionsByClass); // pour récupérer toutes les actions d'une certaine classe
router.get('/:id(\\d+)', actionController.getOneAction); // pour récupérer une action en particulier

export default router;