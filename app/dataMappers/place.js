// Le placeDataMapper faisant le lien entre le placeController et les fonctions sql

// On importe pgpool pour pouvoir effectuer les requêtes sql
import pool from "../services/pgPool.js";

// Tout sera contenu dans l'objet placeDataMapper
const placeDataMapper = {

    // Pour récupérer tous les lieux existants dans la bdd :
    async findAll() {

        // On utilise la fonction sql get_all_places
        const sqlQuery = "SELECT * FROM get_all_places();";

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

    // Pour récupérer tous les lieux appartenant à un univers existants dans la bdd :
    async findByWorld(worldId) {

        // On utilise la fonction sql get_all_places_by_world
        const sqlQuery = "SELECT * FROM get_all_places_by_world($1);";

        // à laquelle on transfère l'id de l'univers donné par le front
        const values = [worldId];

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

    // Pour récupérer un lieu en particulier :
    async findById(id){

        // On utilise la fonction sql get_place_by_id
        const sqlQuery = "SELECT * FROM get_place_by_id($1);";

        // à laquelle on transfère l'id du lieu donné par le front
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

// On exporte le placeDataMapper
export { placeDataMapper };