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
    // Pour récupérer toutes les cases d'une certaine histoire en tant qu'utilisateur connecté.
    async getAllCompartmentsByStory(req, res, next) {
        try {
            const { storyId } = req.params;
            const { result, error } = await compartmentDataMapper.findByStory(storyId);
            // Appel de la fonction de controllerHelper pour gérer la réponse. 
            manageResponse(res, result, error, next);
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer toutes les cases d'une certaine histoire et d'une certaine classe en tant qu'utilisateur connecté.
    async getAllCompartmentsByStoryAndByClass(req, res, next) {
        try {
            const { storyId, compartmentClassName } = req.params;
            const { result, error } = await compartmentDataMapper.findByStoryAndByClass(storyId, compartmentClassName);
            // Appel de la fonction de controllerHelper pour gérer la réponse. 
            manageResponse(res, result, error, next);
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer la case d'une certaine histoire et de classe 'beginning' en tant qu'utilisateur connecté.
    async getCompartmentByStoryAndByClassBeginning(req, res, next) {
        try {
            const { storyId } = req.params;
            const { result, error } = await compartmentDataMapper.findByStoryAndByClassBeginning(storyId);
            // Appel de la fonction de controllerHelper pour gérer la réponse. 
            manageResponse(res, result, error, next);
        } catch (error) {
            next(error);
        }
    },
};

export { compartmentController };

