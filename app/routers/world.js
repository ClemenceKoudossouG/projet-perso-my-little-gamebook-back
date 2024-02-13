import { worldController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

router.get('/', worldController.getAllWorlds); // pour récupérer tous les univers existants
router.get('/:id(\\d+)', worldController.getOneWorld); // pour récupérer un univers en particulier

export default router;