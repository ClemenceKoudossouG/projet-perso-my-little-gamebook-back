//import { executeRequestWithSingleResult } from "../helper/pgHelper";
//import { executeRequest } from "../helper/pgHelper";

import pool from "../services/pgPool.js";

const resetPasswordDataMapper = {

    // Pour récupérer un utilisateur par son email :
    async getUserByEmail(email){
        // On utilise la fonction sql get_user_by_email
        const sqlQuery = "SELECT * FROM get_user_by_email($1);";
        // à laquelle on transfère l'email de l'utilisateur donné par le front
        const values = [email];

        let result;
        let results;
        let error;
        try {
        // Avec la méthode async/await
        const response = await pool.query(sqlQuery,values);
        // On récupère les informations données par la bdd
        results = response.rows[0];
        // On ne récupère que le premier objet get_user_by_email du résultat :
        result = results.get_user_by_email;
        }
        catch (err) {
            error = err;
        }
        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour enregistrer le token en BDD
    async saveToken(userId, token){
        // On utilise la fonction sql save_token
        const sqlQuery = "SELECT * FROM save_token($1, $2);";
        // à laquelle on transfère l'id et le token de l'utilisateur donné par le front
        const values = [userId, token];

        let result;
        let error;
        try {
            console.log('Executing query:', sqlQuery, 'with values:', values);
        // Avec la méthode async/await
        const response = await pool.query(sqlQuery,values);
        // On récupère les informations données par la bdd
        result = response.rows[0];
        }
        catch (err) {
            error = err;
        }
        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },
    // Pour vérifier le token de reset
    async getToken(token){
        const sqlQuery = "SELECT * FROM get_token($1);";
        const values = [token];
        let result, error;
        
        try {
            const response = await pool.query(sqlQuery, values);
            if (response.rows.length > 0) {
                result = response.rows[0]; // Ensure we get the entire row
            } else {
                result = null; // No valid token found
            }
        } catch (err) {
            error = err;
        }
        
        return { result, error };
    },
    // Pour mettre à jour le mot de passe
    async updatePassword(userId, password){
        const sqlQuery = "SELECT * FROM update_password($1, $2);";
        const values = [userId, password];
        let result, error;

        try {
            const response = await pool.query(sqlQuery, values);
            result = response.rows[0]; // get the result
        } catch (err) {
            error = err;
        }
        return { result, error };
    }
};

export { resetPasswordDataMapper };
