import { actionController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

router.get("/", actionController.getAllActions);

export default router;