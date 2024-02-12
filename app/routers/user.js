import { userController } from "../controllers";

import { Router } from "express";
const router = Router();

// On utilise le middleware isMember pour pouvoir vérifier si l'utilisateur existe en BDD
import isMember from "../services/security.js";

router.get("/user", isMember, userController.getCurrentUser);
router.post('/signup', userController.signup);
router.post('/signin', userController.signin)

export default router;