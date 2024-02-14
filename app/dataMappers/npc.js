// Le npcDataMapper faisant le lien entre le npcController et les fonctions sql

// On importe pgpool pour pouvoir effectuer les requêtes sql
import pool from "../services/pgPool.js";

/**
 * @typedef {object} Npc
 * @property {number} id - Primary key
 * @property {string} route - Route (for SEO)
 * @property {string} label - Name of the npc
 * @property {string} img - Image's text of the npc
 */
const npcDataMapper = {

    // Pour récupérer tous les personnages existants dans la bdd :
    async findAll() {

        // On utilise la fonction sql get_all_npcs
        const sqlQuery = "SELECT * FROM get_all_npcs();";

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

    // Pour récupérer tous les personnages appartenant à un univers existants dans la bdd :
    async findByWorld(worldId) {

        // On utilise la fonction sql get_all_npcs_by_world
        const sqlQuery = "SELECT * FROM get_all_npcs_by_world($1);";

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

    // Pour récupérer un personnage en particulier :
    async findById(id){

        // On utilise la fonction sql get_npc_by_id
        const sqlQuery = "SELECT * FROM get_npc_by_id($1);";

        // à laquelle on transfère l'id du personnage donné par le front
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

// On exporte le npcDataMapper
export { npcDataMapper };