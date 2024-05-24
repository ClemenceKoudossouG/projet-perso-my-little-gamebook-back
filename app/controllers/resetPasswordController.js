import { resetPasswordDatamapper } from '../datamappers/resetPasswordDatamapper';
import { manageResponse } from '../helper/controllerHelper';
import APIError from '../services/errorHandler/APIError';
import { generateResetToken } from '../services/security';

const resetPasswordController = {
    // Pour réinitialiser le mot de passe
    async resetPassword(req, res, next) {
        try {
            // Récupération du mail de l'utilisateur
            const { alias, email } = req.body;
            // Vérification si l'utilisateur existe en BDD
            const { result, error } = await resetPasswordDatamapper.getUserByEmail(alias);
            if (result) {
                // Génération du token
                const token = generateResetToken();
                // Enregistrement du token en BDD
                await resetPasswordDatamapper.saveToken(result.id, token);
                // Envoi du mail de réinitialisation de mot de passe
                // ...fonction sendResetMail qui sera définie dans le dossier services
                // Appel de la fonction de controllerHelper pour gérer la réponse. 
                manageResponse(res, result, error, next);
            } else {
                next(new APIError("Cet utilisateur n'existe pas.", 404));
            }
        } catch (error) {
            next(error);
        }
    }
};

export { resetPasswordController };