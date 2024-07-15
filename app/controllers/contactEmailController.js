import { sendContactEmail } from "../services/contactEmail.js";
import { contactEmailDataMapper } from "../dataMappers/index.js";
import APIError from '../services/errorHandler/APIError.js';
import { manageEmailResponse } from "../helper/controllerHelper.js";

const contactEmailController = {
    async sendContactEmail(req, res, next) {
        try {
            const { name, email, message } = req.body;
            if (!email || !message || !name) {
                next(new APIError("Renseigne bien ton nom, ton email et ton message.", 400));
                return;
            }
            await contactEmailDataMapper.saveEmail(name, email, message);
            console.log('Email saved in database');
            await sendContactEmail(name, email, message);
            manageEmailResponse(res, { name, email, message }, null, next);
        } catch (error) {
            next(error);
        }
    }
};

export { contactEmailController };