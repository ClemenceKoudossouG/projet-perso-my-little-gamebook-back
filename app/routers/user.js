import { userController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

// On utilise le middleware isMember pour pouvoir vérifier si l'utilisateur existe en BDD
import { isMember } from "../services/security.js";

router.get('/user', isMember, userController.getCurrentUser); // pour afficher les données de l'utilisateur (lastname, avatar, etc)
router.post('/signup', userController.signup); // pour s'inscrire sur le site
router.post('/signin', userController.signin) // pour se connecter au site
router.patch('/:id(\\d+)', userController.updateOneUser); // pour modifier ses données en tant qu'utilisateur connecté
router.delete('/:id(\\d+)', userController.deleteOneUser) // pour supprimer son compte utilisateur

export default router;