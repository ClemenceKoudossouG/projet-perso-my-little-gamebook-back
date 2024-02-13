// Le storyDataMapper faisant le lien entre le storyController et les fonctions sql

// On importe pgpool pour pouvoir effectuer les requêtes sql
import pool from "../services/pgPool.js";

// Tout sera contenu dans l'objet storyDataMapper
const storyDataMapper = {

    // Pour récupérer toutes les histoires existantes dans la bdd :
    async findAll() {

        // On utilise la fonction sql get_all_stories
        const sqlQuery = "SELECT * FROM get_all_stories();";

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

    // Pour récupérer toutes les histoires associées à un genre existantes dans la bdd :
    async findByGenre(genreId) {

        // On utilise la fonction sql get_all_stories_by_genre
        const sqlQuery = "SELECT * FROM get_all_stories_by_genre($1);";

        // à laquelle on transfère l'id du genre donné par le front
        const values = [genreId];

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

    // Pour récupérer toutes les histoires d'un certain niveau existantes dans la bdd :
    async findByLevel(level) {

        // On utilise la fonction sql get_all_stories_by_level
        const sqlQuery = "SELECT * FROM get_all_stories_by_level($1);";

        // à laquelle on transfère le niveau (integer) donné par le front
        const values = [level];

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

    // Pour récupérer une histoire en particulier :
    async findById(id){

        // On utilise la fonction sql get_story_by_id
        const sqlQuery = "SELECT * FROM get_story_by_id($1);";

        // à laquelle on transfère l'id de l'histoire donné par le front
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

// On exporte le storyDataMapper
export { storyDataMapper };