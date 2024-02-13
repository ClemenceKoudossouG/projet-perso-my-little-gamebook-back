// Le compartmentDataMapper faisant le lien entre le compartmentController et les fonctions sql

// Import des fonctions du pgHelper pour refactoriser les fonctions
import { executeRequest } from "../helper/pgHelper.js";
import { executeRequestWithSingleResult } from "../helper/pgHelper.js";

// Tout sera contenu dans l'objet compartmentDataMapper
const compartmentDataMapper = {

    // Pour récupérer toutes les cases existantes dans la bdd :
    async findAll() {
        // On utilise la fonction sql get_all_compartments
        const sqlQuery = "SELECT * FROM get_all_compartments();";
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequest(sqlQuery);
    },

    // Pour récupérer toutes les cases existantes dans la bdd selon une classe de cases choisie :
    async findByClass(compartmentClassName) {
        // On utilise la fonction sql get_all_compartments_by_class
        const sqlQuery = "SELECT * FROM get_all_compartments_by_class($1);";
        // à laquelle on transfère le nom de la classe ('text') donné par le front
        const values = [compartmentClassName];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequest(sqlQuery, values);
    },

    // Pour récupérer une case en particulier :
    async findById(id){
        // On utilise la fonction sql get_compartment_by_id
        const sqlQuery = "SELECT * FROM get_compartment_by_id($1);";
        // à laquelle on transfère l'id de la case donné par le front
        const values = [id];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequestWithSingleResult(sqlQuery, values);
    },
};

// On exporte le compartmentDataMapper
export { compartmentDataMapper };