// Index des routers pour les centraliser et renvoyer les appels des fonctions vers le router en question souhaité

// On importe tous les routers existants dans chaque fichier qui porte son nom
import userRouter from "./user";

// On importe Router pour l'utiliser pour chaque router
import { Router } from "express";
const router = Router();

// On place le service de gestion d'erreurs
import errorHandler  from "../services/errorHandler/errorHandler.js";

// On renvoie vers tous les routers
router.use("/user",userRouter);

// On utiliser le service de gestion d'erreurs
router.use(errorHandler);

// et on exporte le router pour qu'il soit toujours utilisable
export default router;