// Le itemDataMapper faisant le lien entre le itemController et les fonctions sql

// On importe pgclient pour pouvoir effectuer les requêtes sql
import { client } from "../services/pgClient";

// Tout sera contenu dans l'objet itemDataMapper
const itemDataMapper = {

    // Pour récupérer tous les objets existants dans la bdd :
    async findAll() {

        // On utilise la fonction sql get_all_items
        const sqlQuery = "SELECT * FROM get_all_items();";

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

    // Pour récupérer tous les objets associés à une action existants dans la bdd :
    async findByAction(actionId) {

        // On utilise la fonction sql get_all_items_by_action
        const sqlQuery = "SELECT * FROM get_all_items_by_action($1);";

        // à laquelle on transfère l'id de l'action donné par le front
        const values = [actionId];

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

    // Pour récupérer un objet en particulier :
    async findById(id){

        // On utilise la fonction sql get_item_by_id
        const sqlQuery = "SELECT * FROM get_item_by_id($1);";

        // à laquelle on transfère l'id de l'objet donné par le front
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

// On exporte le itemDataMapper
export default itemDataMapper;