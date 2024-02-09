// import { npcDataMapper } from "";

const npcController = {
    // Pour récupérer tous les personnages existants en tant qu'utilisateur connecté.
    async getAllnpcs(req, res, next) {
        try {
            const { result, error } = await npcDataMapper.findAll();
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
    // Pour récupérer un personnage, par son id, en tant qu'utilisateur connecté.
    async getOneNpc(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await npcDataMapper.findById(id);
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
    // Pour récupérer tous les personnages existants par univers en tant qu'utilisateur connecté.
    async getAllNpcsByWorld(req, res, next) {
        try {
            const { world } = req.params;
            const { result, error } = await npcDataMapper.findByWorld(world);
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

export default npcController;