import { Router } from "express";

import userController from "../controllers/userController.js";

const router = Router();

// On utilise le middleware isMember pour pouvoir vérifier si l'utilisateur existe en BDD
import isMember from "../services/security.js";

router.get('/user', isMember, userController.getCurrentUser);
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.patch('/:id(\\d+)', userController.updateOneUser);
router.delete('/:id(\\d+)', userController.deleteOneUser);

export default router;