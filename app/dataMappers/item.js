// Le itemDataMapper faisant le lien entre le itemController et les fonctions sql

// Import des fonctions du pgHelper pour refactoriser les fonctions
import { executeRequest } from "../helper/pgHelper.js";
import { executeRequestWithSingleResult } from "../helper/pgHelper.js";

/**
 * @typedef {object} Item
 * @property {number} id - Primary key
 * @property {string} route - Route (for SEO)
 * @property {string} label - Name of the item
 * @property {string} img - Image's text of the item
 */
const itemDataMapper = {

    // Pour récupérer tous les objets existants dans la bdd :
    async findAll() {
        // On utilise la fonction sql get_all_items
        const sqlQuery = "SELECT * FROM get_all_items();";
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequest(sqlQuery);
    },

    // Pour récupérer tous les objets associés à une action existants dans la bdd :
    async findByAction(actionId) {
        // On utilise la fonction sql get_all_items_by_action
        const sqlQuery = "SELECT * FROM get_all_items_by_action($1);";
        // à laquelle on transfère l'id de l'action donné par le front
        const values = [actionId];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequest(sqlQuery, values);
    },

    // Pour récupérer un objet en particulier :
    async findById(id){
        // On utilise la fonction sql get_item_by_id
        const sqlQuery = "SELECT * FROM get_item_by_id($1);";
        // à laquelle on transfère l'id de l'objet donné par le front
        const values = [id];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequestWithSingleResult(sqlQuery, values);
    },

    // Pour stocker des items au cours d'un jeu
    async storeItem(itemId, session) {
        try {
            //On vérifie si la session utilisateur existe
            if(!session || !session.user) {
                throw new Error("Session utilisateur introuvable");
            }
            //On récupère l'item depuis la BDD. this = contexte de l'objet itemDataMapper. 
            const item = await this.findById(itemId);
            // On vérifie l'existence de l'item
            if (!item) {
                throw new Error("Objet introuvable.");
            }
            // On vérifie si il y a un array pour l'inventaire dans la session utilisateur, sinon on en crée un. 
            if(!session.user.inventory) {
                session.user.inventory = [];
            }
            // On stocke l'item dans l'inventaire de l'user sur sa session
            session.user.inventory.push(itemId);
            // On retourne l'item stocké
            return item;
        } catch(error) {
            throw error;
        }
    }
};

// On exporte le itemDataMapper
export { itemDataMapper };