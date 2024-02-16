// Le compartmentDataMapper faisant le lien entre le compartmentController et les fonctions sql

// Import des fonctions du pgHelper pour refactoriser les fonctions
import { executeRequest } from "../helper/pgHelper.js";
import { executeRequestWithSingleResult } from "../helper/pgHelper.js";

/**
 * @typedef {object} Compartment
 * @property {number} id - Primary key
 * @property {string} route - Route (for SEO)
 * @property {number} position - Position of the compartment
 * @property {string} class - Class of the compartment
 * @property {string} children - Next children compartments' PK of the current compartment
 * @property {number} story_id - Primary key of the compartment's story
 * @property {number} place_id - Primary key of the compartment's place
 * @property {number} npc_id - Primary key of the compartment's npc
 */
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
        // On utilise la fonction sql compartment_by_id
        const sqlQuery = "SELECT * FROM compartment_by_id($1);";
        // à laquelle on transfère l'id de la case donné par le front
        const values = [id];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequestWithSingleResult(sqlQuery, values);
    },

    // Pour récupérer toutes les cases existantes dans la bdd selon une histoire choisie :
    async findByStory(storyId){
        // On utilise la fonction sql compartment
        const sqlQuery = "SELECT * FROM compartment($1);";
        // à laquelle on transfère l'id de l'histoire donné par le front
        const values = [storyId];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequest(sqlQuery, values);
    },

    // Pour récupérer toutes les cases existantes dans la bdd selon une histoire et une certaine classe de cases choisies :
    async findByStoryAndByClass(storyId, compartmentClassName) {
        // On utilise la fonction sql get_all_compartments_by_story_and_by_class
        const sqlQuery = "SELECT * FROM get_all_compartments_by_story_and_by_class($1, $2);";
        // à laquelle on transfère l'id de l'histoire et le nom de la classe ('text') donné par le front
        const values = [storyId, compartmentClassName];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequest(sqlQuery, values);
    },

    // Pour récupérer la case dans la bdd selon une histoire et la classe 'beginning' :
    async findByStoryAndByClassBeginning(storyId) {
        // On utilise la fonction sql get_compartment_by_story_and_by_class_beginning
        const sqlQuery = "SELECT * FROM get_compartment_by_story_and_by_class_beginning($1);";
        // à laquelle on transfère l'id de l'histoire et le nom de la classe ('text') donné par le front
        const values = [storyId];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequestWithSingleResult(sqlQuery, values);
    },
};

// On exporte le compartmentDataMapper
export { compartmentDataMapper };