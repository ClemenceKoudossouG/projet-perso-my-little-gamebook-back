import { worldDataMapper } from "../dataMappers";

const worldController = {
    // Pour récupérer tous les univers existants.
    async getAllWorlds(req, res, next) {
        try {
            const { result, error } = await worldDataMapper.findAll();
            // Vérification d'erreur
            if (error) {
                next(error);
            } else {
            // Renvoi test en JSON si nécessaire
            res.json(result);
            }
        } catch (error) {
            next(error);
        }
    },
    // Pour récupérer un univers, par son id.
    async getOneWorld(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await worldDataMapper.findById(id);
            // Vérification d'erreur
            if (error) {
                next(error);
            } else {
                // Renvoi test en JSON si nécessaire
                res.json(result);
            }
        } catch (error) {
            next(error);
        }
    }
};

export default worldController;