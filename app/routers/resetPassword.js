import { Router } from 'express';
import { resetPasswordController } from '../controllers/index.js';

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

router.post('/', resetPasswordController.passwordResetRequest);

/**
 * POST /reset-password
 * @summary Reset password
 * @tags ResetPassword
 * @param {string} request.body.required - token, password
 * @return 200 - Success response - application/json
 * @return {ApiError} 400 - Error: Bad Request - application/json
 * @return {ApiError} 404 - Error: Token invalid - application/json
 */
router.post('/reset-password', resetPasswordController.passwordReset);

export default router;