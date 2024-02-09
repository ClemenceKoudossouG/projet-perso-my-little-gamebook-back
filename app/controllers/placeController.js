// import { worldDataMapper } from "";

const placeController = {
    // Pour récupérer tous les lieux existants en tant qu'utilisateur connecté.
    async getAllPlaces(req, res, next) {
        try {
            const { result, error } = await placeDataMapper.findAll();
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
    // Pour récupérer un lieu, par son id, en tant qu'utilisateur connecté.
    async getOnePlace(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await placeDataMapper.findById(id);
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
    // Pour récupérer tous les lieux existants par univers, en tant qu'utilisateur connecté.
    async getAllPlacesByWorld(req, res, next) {
        try {
            const { world } = req.params;
            const { result, error } = await placeDataMapper.findByWorld(world);
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

export default placeController;