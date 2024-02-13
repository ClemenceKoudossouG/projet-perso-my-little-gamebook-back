import { npcController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

router.get('/', npcController.getAllNpcs); // pour récupérer tous les personnages existants
router.get('/world/:worldId(\\d+)', npcController.getAllNpcsByWorld); // pour récupérer tous les personnages existants par univers
router.get('/:id(\\d+)', npcController.getOneNpc); // pour récupérer un personnage en particulier

export default router;