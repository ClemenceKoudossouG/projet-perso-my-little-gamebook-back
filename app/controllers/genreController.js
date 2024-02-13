import { genreDataMapper } from "../dataMappers/index.js";

const genreController = {
    // Pour récupérer tous les genres.
    async getAllGenres(req, res, next) {
        try {
            const { result, error } = await genreDataMapper.findAll();
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
    // Pour récupérer un genre, par son id.
    async getOneGenre(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await genreDataMapper.findById(id);
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
    // Pour récupérer tous les genres associés à une histoire.
    async getAllGenresOfAStory(req, res, next) {
        try {
            // Récupération de l'id de l'histoire concernée.
            const { storyId } = req.params;
            const { result, error } = await genreDataMapper.findAllGenresOfAStory(storyId);
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

export { genreController };