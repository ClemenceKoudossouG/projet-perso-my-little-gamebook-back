import { compartmentDataMapper } from "../dataMappers/index.js";
import { manageResponse } from "../helper/controllerHelper.js";

const compartmentController = {
    // Pour récupérer toutes les cases créées dans une histoire en tant qu'utilisateur connecté.
    async getAllCompartments(req, res, next) {
        try {
            const { result, error } = await compartmentDataMapper.findAll();
            // Appel de la fonction de controllerHelper pour gérer la réponse. 
            manageResponse(res, result, error, next);
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer une case, par son id, en tant qu'utilisateur connecté.
    async getOneCompartment(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await compartmentDataMapper.findById(id);
            // Appel de la fonction de controllerHelper pour gérer la réponse. 
            manageResponse(res, result, error, next);
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer toutes les cases d'une certaine classe en tant qu'utilisateur connecté.
    async getAllCompartmentsByClass(req, res, next) {
        try {
            const { compartmentClassName } = req.params;
            const { result, error } = await compartmentDataMapper.findByClass(compartmentClassName);
            // Appel de la fonction de controllerHelper pour gérer la réponse. 
            manageResponse(res, result, error, next);
        } catch (error) {
            next(error);
        }
    },
};

export { compartmentController };

