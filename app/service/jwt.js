import jwt from "jsonwebtoken";


export default {
    // Génération du token pour le user.
    encode(user){
        return jwt.sign(user, process.env.JWT_SECRET);
    },
    // Déchiffrage du token.
    decode(token){
        // Initialisation des variables résultat/erreur.
        let result;
        let error;
        try{
            // Vérification du token
            result = jwt.verify(token, process.env.JWT_SECRET);
        } catch(error) {
            next(error)
        }
        return(result, error);
    }
};  