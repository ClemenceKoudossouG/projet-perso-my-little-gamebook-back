// Le genreDataMapper faisant le lien entre le genreController et les fonctions sql

// On importe pgpool pour pouvoir effectuer les requêtes sql
import pool from "../services/pgPool.js";

// Tout sera contenu dans l'objet genreDataMapper
const genreDataMapper = {

    // Pour récupérer tous les genres existants dans la bdd :
    async findAll() {

        // On utilise la fonction sql get_all_genres
        const sqlQuery = "SELECT * FROM get_all_genres();";

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

    // Pour récupérer tous les genres associés à une histoire existants dans la bdd :
    async findAllGenresOfAStory(storyId) {

        // On utilise la fonction sql get_all_genres_of_a_story
        const sqlQuery = "SELECT * FROM get_all_genres_of_a_story($1);";

        // à laquelle on transfère l'id de l'histoire donné par le front
        const values = [storyId];

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

    // Pour récupérer un genre en particulier :
    async findById(id){

        // On utilise la fonction sql get_genre_by_id
        const sqlQuery = "SELECT * FROM get_genre_by_id($1);";

        // à laquelle on transfère l'id du genre donné par le front
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

// On exporte le genreDataMapper
export { genreDataMapper };