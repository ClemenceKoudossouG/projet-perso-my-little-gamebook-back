import { userDataMapper } from "../dataMappers/index.js";

import JWT from "../services/jwt.js";
import APIError from "../services/errorHandler/APIError.js";
import { encodePassword, passwordMatch } from "../services/security.js";

const userController = {
    // Pour afficher les données de l'utilisateur (lastname, avatar, etc)
    async getCurrentUser(req, res, next) {
        try {
            // Récupération du token de l'utilisateur
            const token = req.get("Authorization");
            // Vérification du token de l'utilisateur
            const user = JWT.decode(token);
            const { result, error } = await userDataMapper.getUser(user.id);
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
            const user = req.body;
            // Chiffrement du mot de passe
            //user.password = await encodePassword(user.password);
            // Récupérer les infos de l'utilisateur qui s'inscrit en appelant la méthode createUser.
            const { result, error } = await userDataMapper.createUser(user);
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
            // Récupération du formulaire
            const login = req.body;
            // Récupérer les informations de l'utilisateur en appelant la méthode authenticateUser
            let { result, error } = await userDataMapper.authenticateUser(login);
            const user = result.verify_user;
            // Comparaison du mdp BDD / formulaire
            if (user) {
            // Génération du token
            const token = JWT.encode(user);
            user.token = token;
            } else {
                error = new APIError("Identifiants incorrects", 401);
            }
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

export { userController };