// Le itemDataMapper faisant le lien entre le itemController et les fonctions sql

// Import des fonctions du pgHelper pour refactoriser les fonctions
import { executeRequest } from "../helper/pgHelper.js";
import { executeRequestWithSingleResult } from "../helper/pgHelper.js";

// Tout sera contenu dans l'objet itemDataMapper
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
    }
};

// On exporte le itemDataMapper
export { itemDataMapper };