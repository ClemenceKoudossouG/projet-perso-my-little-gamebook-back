// import { userDataMapper } from "";

const userController = {
    // Pour afficher les données de l'utilisateur (lastname, avatar, etc)
    async getCurrentUser(req, res, next) {
        try {
            // Récupérer l'id de l'utilisateur concerné (ajouter token ?)
            const { userId } = req.params;
            const { result, error } = await userDataMapper.getUser(userId);
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
    // Pour s'inscrire sur le site
    async signup(req, res, next) {
        try {
            // Récupérer les infos de l'utilisateur qui s'inscrit en appelant la méthode createUser.
            const { result, error } = await userDataMapper.createUser(req.body);
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
    // Pour se connecter au site
    async signin(req, res, next) {
        try {
            // Récupérer les informations de l'utilisateur en appelant la méthode authenticateUser
            const { result, error } = await userDataMapper.authenticateUser(req.body);
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
    // Pour modifier ses données en tant qu'utilisateur connecté
    async updateOneUser(req, res, next) {
        try {
            // Récupérer l'id de l'utilisateur concerné
            const { userId }  = req.params;
            // Récupérer les infos modifiées
            const { updatedUserInfo } = req.body;
            // Appeler la méthode update
            const { result, error } = await userDataMapper.updateUser({ userId, updatedUserInfo });
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
    // Pour supprimer son compte utilisateur
    async deleteOneUser(req, res, next) {
        try {
            // Récupérer l'id de l'utilisateur concerné
            const { userId }  = req.params;
            // Appeler la méthode delete
            const { result, error } = await userDataMapper.deleteUser(userId);
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

export default userController;