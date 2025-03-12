import { resetPasswordDataMapper } from '../dataMappers/index.js';
import { manageEmailResponse } from '../helper/controllerHelper.js';
import APIError from '../services/errorHandler/APIError.js';
import { generateResetToken } from '../services/security.js';
import { sendPasswordResetEmail } from '../services/passwordReset.js';
import { encodePassword } from '../services/security.js';
import { manageResponse } from '../helper/controllerHelper.js';

const resetPasswordController = {
    // Pour réinitialiser le mot de passe
    async passwordResetRequest(req, res, next) {
        try {
            // Récupération du mail de l'utilisateur
            const { email } = req.body;
            // Vérification si l'utilisateur existe en BDD
            const { result, error } = await resetPasswordDataMapper.getUserByEmail(email);
            if (result) {
                // Génération du token
                const token = generateResetToken();
                // Enregistrement du token en BDD
                await resetPasswordDataMapper.saveToken(result.id, token);
                console.log('Token saved successfully:', result);
                // Envoi du mail de réinitialisation de mot de passe
                await sendPasswordResetEmail(email, token);
                // Appel de la fonction de controllerHelper pour gérer la réponse. 
                manageEmailResponse(res, result, error, next);
            } else {
                next(new APIError("Cet utilisateur n'existe pas.", 404));
            }
        } catch (error) {
            next(error);
        }
    },
    async passwordReset(req, res, next) {
        try {
            const { resetToken, password } = req.body;
            console.log('Received token:', resetToken);
            console.log('Received password:', password);
            
            const { result, error } = await resetPasswordDataMapper.getToken(resetToken);
            if (error) {
                console.error('Error fetching token:', error);
                next(new APIError("Token invalide ou expiré.", 404));
                return;
            }
    
            if (result) {
                const userId = result.user_id;
                if (!userId) {
                    console.error('User ID is undefined.');
                    next(new APIError("User ID is undefined.", 404));
                    return;
                }
    
                const hashedPassword = await encodePassword(password);
                console.log('Hashed Password:', hashedPassword); // Log hashed password
    
                const { result: updateResult, error: updateError } = await resetPasswordDataMapper.updatePassword(userId, hashedPassword);
                if (updateError) {
                    console.error('Failed to update password:', updateError);
                    next(new APIError("Failed to update password.", 500));
                    return;
                }
    
                console.log("Update Result:", updateResult); // Log update result
                res.status(200).json({ success: true, message: 'Mise à jour du mot de passe réussie.' });
            } else {
                console.error('Invalid or expired token.');
                next(new APIError("Token invalide ou expiré.", 404));
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            next(error);
        }
    }
};

export { resetPasswordController };