// import { itemDataMapper } from "";

const itemController = {
    // Pour récupérer tous les objets existants en tant qu'utilisateur connecté.
    async getAllItems(req, res, next) {
        try {
            const { result, error } = await itemDataMapper.findAll();
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
    // Pour récupérer un item, par son id, en tant qu'utilisateur connecté.
    async getOneItem(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await itemDataMapper.findById(id);
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
    // Pour récupérer les objets associés à une action spécifique en tant qu'utilisateur connecté.
    async getAllItemsByAction(req, res, next) {
        try {
            const { action } = req.params;
            const { result, error } = await itemDataMapper.findByAction(action);
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
};

export default itemController;