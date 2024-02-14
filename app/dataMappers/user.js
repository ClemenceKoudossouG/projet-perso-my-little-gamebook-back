// Le userDataMapper faisant le lien entre le userController et les fonctions sql

// Import des fonctions du pgHelper pour refactoriser les fonctions
import { executeRequestWithSingleResult } from "../helper/pgHelper.js";
import { executeDeleteRequest } from "../helper/pgHelper.js";

// Tout sera contenu dans l'objet userDataMapper
const userDataMapper = {

    // Pour ajouter un utilisateur au moment du signup :
    async createUser(user){
        // On utilise la fonction sql add_user
        const sqlQuery = "SELECT * FROM add_user($1);";
        // à laquelle on transfère les informations de l'utilisateur données par le front
        const values = [user];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequestWithSingleResult(sqlQuery, values); 
    },

    // Pour vérifier si un utilisateur existe au moment du signin :
    async authenticateUser(user){
        // On utilise la fonction sql verify_user
        const sqlQuery = "SELECT * FROM verify_user($1);";
        // à laquelle on transfère les informations de l'utilisateur données par le front
        const values = [user];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequestWithSingleResult(sqlQuery, values); 
    },

    // Pour récupérer un utilisateur en particulier :
    async getUser(id){
        // On utilise la fonction sql get_user
        const sqlQuery = "SELECT * FROM get_user($1);";
        // à laquelle on transfère l'id de l'utilisateur donné par le front
        const values = [id];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequestWithSingleResult(sqlQuery, values); 
    },

    // Pour modifier les informations d'un utilisateur en particulier :
    async updateUser(user){
        // On utilise la fonction sql update_user
        const sqlQuery = "SELECT * FROM update_user($1);";
        // à laquelle on transfère les informations de l'utilisateur données par le front
        const values = [user];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeRequestWithSingleResult(sqlQuery, values); 
    },
    
    // Pour supprimer un utilisateur en particulier :
    async deleteUser(id){
        // On utilise la fonction sql update_user
        const sqlQuery = "SELECT * FROM delete_user($1);";
        // à laquelle on transfère l'id de l'utilisateur donné par le front
        const values = [id];
        // Appel de la fonction du pgHelper pour exécuter la requête. 
        return executeDeleteRequest(sqlQuery, values); 
    },

};

// On exporte le userDataMapper
export { userDataMapper };
