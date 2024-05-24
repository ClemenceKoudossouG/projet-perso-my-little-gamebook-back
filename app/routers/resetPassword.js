import { Router } from 'express';
import { resetPasswordController } from '../controllers/resetPasswordController.js';

const router = Router();

/**
 * POST /resetPassword
 * @summary Reset password
 * @tags ResetPassword
 * @param {string} request.body.required - email
 * @return 200 - Success response - application/json
 * @return {ApiError} 400 - Error: Bad Request - application/json
 * @return {ApiError} 404 - Error: User not found - application/json
 */

router.post('/', resetPasswordController.resetPassword);

// export default router;