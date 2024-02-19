import { itemDataMapper } from "../dataMappers/index.js";
import { manageResponse } from "../helper/controllerHelper.js";

const itemController = {
    // Pour récupérer tous les objets existants en tant qu'utilisateur connecté.
    async getAllItems(req, res, next) {
        try {
            const { result, error } = await itemDataMapper.findAll();
            // Appel de la fonction de controllerHelper pour gérer la réponse. 
            manageResponse(res, result, error, next);
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer un item, par son id, en tant qu'utilisateur connecté.
    async getOneItem(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await itemDataMapper.findById(id);
            // Appel de la fonction de controllerHelper pour gérer la réponse. 
            manageResponse(res, result, error, next);
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer les objets associés à une action spécifique en tant qu'utilisateur connecté.
    async getAllItemsByAction(req, res, next) {
        try {
            const { actionId } = req.params;
            const { result, error } = await itemDataMapper.findByAction(actionId);
            // Appel de la fonction de controllerHelper pour gérer la réponse. 
            manageResponse(res, result, error, next);
        } catch (error) {
            next(error);
        }
    },
     // Pour ajouter des items à la session utilisateur au cours d'un jeu
    async addItemToInventory(req, res, next) {
        try {
            // On extrait l'id de l'item depuis le body
            const { itemId } = req.body;
            // On appelle la méthode pour stocker l'item dans le dataMapper story
            const storedItem = await itemDataMapper.storeItem(itemId, req.session);
            // On retourne l'item stocké
            res.json({ success: true, message: "Objet ajouté avec succès.", itemId: storedItem });
        } catch (error) {
            next(error);
        }
    }
};

export { itemController };