// On va utiliser bcrypt pour le hachage de mot de passe, ainsi que pour le comparer
import bcrypt from 'bcrypt';

// On va utiliser la fonction decode définie dans le fichier jwt.js
import JWT from "../services/jwt.js";

// On utilise l'affichage des APIError
import { APIError } from './error/APIError.js';

// Pour vérifier à chaque fois si l'utilisateur est un membre connecté enregistré, on vérifie son token :
export function isMember(req, res, next) {
    // Récupération du token
    const token = req.get("Authorization");
    // Vérification du token
    const { result, error } = JWT.decode(token);

    if (result) {
        // l'utilisateur est-il existant ?
        next();
    }
    else {
        next(new APIError("Vous n'avez pas le droit.",401));
    }
}

// Pour encoder le mot de passe, on va utiliser bcrypt qui va hacher le mdp, un certain nombre de fois selon le "salage" que l'on a défini :
export async function encodePassword(password){
    return await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT));
}

// Pour vérifier le mot de passe :
export async function passwordMatch(password,passwordHash){
    return await bcrypt.compare(password, passwordHash);
}














function isMember(req, res, next) {

    const token = req.get("Authorization");

    const { result, error } = JWT.decode(token);

    if (result) {

        if (result.role == 'member' || result.role == 'admin') {
            next();
        }
        else {
            next(new Error("Vous n'avez pas le droit"));
        }
    }
    else {
        next(error);
    }
}
