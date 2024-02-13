// Le compartmentDataMapper faisant le lien entre le compartmentController et les fonctions sql

// On importe pgpool pour pouvoir effectuer les requêtes sql
import pool from "../services/pgPool.js";

// Tout sera contenu dans l'objet compartmentDataMapper
const compartmentDataMapper = {

    // Pour récupérer toutes les cases existantes dans la bdd :
    async findAll() {

        // On utilise la fonction sql get_all_compartments
        const sqlQuery = "SELECT * FROM get_all_compartments();";

        let result;
        let error;
        try {
            // Avec la méthode async/await
            const response = await pool.query(sqlQuery);

            // On récupère toutes les rangées en question implémentées dans la bdd
            result = response.rows;
        }
        catch (err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour récupérer toutes les cases existantes dans la bdd selon une classe de cases choisie :
    async findByClass(compartmentClassName) {

        // On utilise la fonction sql get_all_compartments_by_class
        const sqlQuery = "SELECT * FROM get_all_compartments_by_class($1);";
    
        // à laquelle on transfère le nom de la classe ('text') donné par le front
        const values = [compartmentClassName];
    
        let result;
        let error;
        try {
            // Avec la méthode async/await
            const response = await pool.query(sqlQuery,values);
    
            // On récupère les informations données par la bdd
            result = response.rows;
        }
        catch (err) {
            error = err;
        }
    
        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour récupérer une case en particulier :
    async findById(id){

        // On utilise la fonction sql get_compartment_by_id
        const sqlQuery = "SELECT * FROM get_compartment_by_id($1);";

        // à laquelle on transfère l'id de la case donné par le front
        const values = [id];

        let result;
        let error;

        try {
            // Avec la méthode async/await
            const response = await pool.query(sqlQuery,values);

            // On récupère les informations données par la bdd
            result = response.rows[0];
        } catch(err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

};

// On exporte le compartmentDataMapper
export { compartmentDataMapper };