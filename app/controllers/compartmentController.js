import { compartmentDataMapper } from "../dataMappers/index.js";

const compartmentController = {
    // Pour récupérer toutes les cases créées dans une histoire en tant qu'utilisateur connecté.
    async getAllCompartments(req, res, next) {
        try {
            const { result, error } = await compartmentDataMapper.findAll();
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
    // Pour récupérer une case, par son id, en tant qu'utilisateur connecté.
    async getOneCompartment(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await compartmentDataMapper.findById(id);
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
    // Pour récupérer toutes les cases d'une certaine classe en tant qu'utilisateur connecté.
    async getAllCompartmentsByClass(req, res, next) {
        try {
            const { compartmentClassName } = req.params;
            const { result, error } = await compartmentDataMapper.findByClass(compartmentClassName);
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

export { compartmentController };

