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
};

export default npcController;