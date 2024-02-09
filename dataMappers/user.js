// Le userDataMapper faisant le lien entre le userController et les fonctions sql

// On importe pgclient pour pouvoir effectuer les requêtes sql
import { client } from "../services/pgClient";

// Tout sera contenu dans l'objet userDataMapper
const userDataMapper = {

    // Pour ajouter un utilisateur au moment du signup :
    async addUser(user){

        // On utilise la fonction sql add_user
        const sqlQuery = "SELECT * FROM add_user($1);";

        // à laquelle on transfère les informations de l'utilisateur données par le front
        const values = [user];

        let result;
        let error;

        try {
            // Avec la méthode async/await
            const response = await client.query(sqlQuery,values);

            // On récupère les informations maintenant implémentées dans la bdd
            result = response.rows[0];
        } catch(err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour vérifier si un utilisateur existe au moment du signin :
    async verifyUser(user){

        // On utilise la fonction sql verify_user
        const sqlQuery = "SELECT * FROM verify_user($1);";

        // à laquelle on transfère les informations de l'utilisateur données par le front
        const values = [user];

        let result;
        let error;

        try {
            // Avec la méthode async/await
            const response = await client.query(sqlQuery,values);

            // On récupère les informations comparées dans la bdd
            result = response.rows[0];
        } catch(err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour récupérer un utilisateur en particulier :
    async getUser(id){

        // On utilise la fonction sql get_user
        const sqlQuery = "SELECT * FROM get_user($1);";

        // à laquelle on transfère l'id de l'utilisateur donné par le front
        const values = [id];

        let result;
        let error;

        try {
            // Avec la méthode async/await
            const response = await client.query(sqlQuery,values);

            // On récupère les informations données par la bdd
            result = response.rows[0];
        } catch(err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour modifier les informations d'un utilisateur en particulier :
    async updateUser(user){

        // On utilise la fonction sql update_user
        const sqlQuery = "SELECT * FROM update_user($1);";

        // à laquelle on transfère les informations de l'utilisateur données par le front
        const values = [user];

        let result;
        let error;
        try {
            // Avec la méthode async/await
            const response = await client.query(sqlQuery,values);

            // On récupère les informations maintenant implémentées dans la bdd
            result = response.rows[0];
        }
        catch (err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },
    
    // Pour supprimer un utilisateur en particulier :
    async deleteUser(id){

        // On utilise la fonction sql update_user
        const sqlQuery = "SELECT * FROM delete_user($1);";

        // à laquelle on transfère l'id de l'utilisateur donné par le front
        const values = [id];

        let result;
        let error;
        try {
            // Avec la méthode async/await
            const response = await client.query(sqlQuery,values);

            // On retourne la dernière rangée ayant été affectée par une suppression :
            result = response.rowCount == 1;
        }
        catch (err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

};

// On exporte le userDataMapper
export default userDataMapper;
