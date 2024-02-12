import { storyDataMapper } from "../dataMappers/index.js";

const storyController = {
    // Pour récupérer toutes les histoires proposées sur l'appli.
    async getAllStories(req, res, next) {
        try {
            const { result, error } = await storyDataMapper.findAll();
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
    // Pour récupérer les histoires par genre.
    async getAllStoriesByGenre(req, res, next) {
        try {
            const { genre } = req.params;
            const { result, error } = await storyDataMapper.findByGenre(genre);
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
    // Pour récupérer les histoires par niveau de difficulté.
    async getAllStoriesByLevel(req, res, next) {
        try {
            const { level } = req.params;
            const { result, error } = await storyDataMapper.findByLevel(level);
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
    // Pour récupérer une histoire, par son id.
    async getOneStory(req, res, next) {
        try {
            const { id } = req.params;
            const { result, error } = await storyDataMapper.findById(id);
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
    }
};

export { storyController };