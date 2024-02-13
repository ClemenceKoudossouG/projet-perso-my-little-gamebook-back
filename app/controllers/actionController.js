import { actionDataMapper } from "../dataMappers/index.js";

const actionController = {
    // Pour récupérer toutes les actions existantes en tant qu'utilisateur connecté.
    async getAllActions(req, res, next) {
        try {
            const { result, error } = await actionDataMapper.findAll();
            // Vérification d'erreur
            if (error) {
                next(error);
            } else {
            // Renvoi test en JSON si nécessaire
            res.json(result);
            }
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer une action, par son id, en tant qu'utilisateur connecté.
    async getOneAction(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await actionDataMapper.findById(id);
            // Vérification d'erreur
            if (error) {
                next(error);
            } else {
                // Renvoi test en JSON si nécessaire
                res.json(result);
            }
        } catch (error) {
            next(error);
        }
    },
    // pour récupérer toutes les actions associées à un personnage spécifique en tant qu'utilisateur connecté.
    async getAllActionsByNpc(req, res, next) {
        try {
            const { npcId } = req.params;
            const { result, error } = await actionDataMapper.findByNpc(npcId);
            // Vérification d'erreur
            if (error) {
                next(error);
            } else {
                // Renvoi test en JSON si nécessaire
                res.json(result);
            }
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer toutes les actions associées à un objet spécifique en tant qu'utilisateur connecté.
    async getAllActionsByItem(req, res, next) {
        try {
            const { itemId } = req.params;
            const { result, error } = await actionDataMapper.findByItem(itemId);
            // Vérification d'erreur
            if (error) {
                next(error);
            } else {
                // Renvoi test en JSON si nécessaire
                res.json(result);
            }
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer toutes les actions d'une certaine classe en tant qu'utilisateur connecté.
    async getAllActionsByClass(req, res, next) {
        try {
            const { actionClassName } = req.params;
            const { result, error } = await actionDataMapper.findByClass(actionClassName);
            // Vérification d'erreur
            if (error) {
                next(error);
            } else {
                // Renvoi test en JSON si nécessaire
                res.json(result);
            }
        } catch (error) {
            next(error);
        }
    },
};

export { actionController };