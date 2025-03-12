import { Router } from 'express';
import { contactEmailController } from '../controllers/index.js';

const router = Router();

/**
 * POST /contactEmail
 * @summary Send email
 * @tags ContactEmail
 * @param {string} request.body.required - name, email, message
 * @return 200 - Success response - application/json
 * @return {ApiError} 400 - Error: Bad Request - application/json
 */
router.post('/', contactEmailController.sendContactEmail);

export default router;

