// Le actionDataMapper faisant le lien entre le actionController et les fonctions sql

// On importe pgclient pour pouvoir effectuer les requêtes sql
import { client } from "../services/pgClient";

// Tout sera contenu dans l'objet actionDataMapper
const actionDataMapper = {

    // Pour récupérer toutes les actions existantes dans la bdd :
    async findAll() {

        // On utilise la fonction sql get_all_actions
        const sqlQuery = "SELECT * FROM get_all_actions();";

        let result;
        let error;
        try {
            // Avec la méthode async/await
            const response = await client.query(sqlQuery);

            // On récupère toutes les rangées en question implémentées dans la bdd
            result = response.rows;
        }
        catch (err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour récupérer toutes les actions associées à un personnage existantes dans la bdd :
    async findByNpc(npcId) {

        // On utilise la fonction sql get_all_actions_by_npc
        const sqlQuery = "SELECT * FROM get_all_actions_by_npc($1);";

        // à laquelle on transfère l'id du personnage donné par le front
        const values = [npcId];

        let result;
        let error;
        try {
            // Avec la méthode async/await
            const response = await client.query(sqlQuery,values);

            // On récupère les informations données par la bdd
            result = response.rows[0];
        }
        catch (err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour récupérer toutes les actions associées à un objet existantes dans la bdd :
    async findByItem(itemId) {

        // On utilise la fonction sql get_all_actions_by_item
        const sqlQuery = "SELECT * FROM get_all_actions_by_item($1);";

        // à laquelle on transfère l'id de l'objet donné par le front
        const values = [itemId];

        let result;
        let error;
        try {
            // Avec la méthode async/await
            const response = await client.query(sqlQuery,values);

            // On récupère les informations données par la bdd
            result = response.rows[0];
        }
        catch (err) {
            error = err;
        }

        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour récupérer toutes les actions existantes dans la bdd selon une classe d'actions choisie :
    async findByClass(actionClassName) {

        // On utilise la fonction sql get_all_actions_by_class
        const sqlQuery = "SELECT * FROM get_all_actions_by_class($1);";
    
        // à laquelle on transfère le nom de la classe ('text') donné par le front
        const values = [actionClassName];
    
        let result;
        let error;
        try {
            // Avec la méthode async/await
            const response = await client.query(sqlQuery,values);
    
            // On récupère les informations données par la bdd
            result = response.rows[0];
        }
        catch (err) {
            error = err;
        }
    
        // On retourne soit le résultat, soit l'erreur
        return {result,error};
    },

    // Pour récupérer une action en particulier :
    async findById(id){

        // On utilise la fonction sql get_action_by_id
        const sqlQuery = "SELECT * FROM get_action_by_id($1);";

        // à laquelle on transfère l'id de l'action donné par le front
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

};

// On exporte le actionDataMapper
export default actionDataMapper;
