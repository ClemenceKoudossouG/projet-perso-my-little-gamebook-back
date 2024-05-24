import { executeRequestWithSingleResult } from "../helper/pgHelper";
import { executeRequest } from "../helper/pgHelper";

import pool from "../services/pgPool";

/**
 * @typedef {object} User
 * @property {number} id - Primary key  
 * @property {string} route - Route (for SEO)
 * @property {string} alias - Alias of the user
 * @property {string} email - Mail of the user
 * @property {string} password - Password of the user
 * @property {string} avatar - Avatar's text of the user
 */

/**
 * @typedef {object} InputUser
 * @property {string} route - Route (for SEO)
 * @property {string} alias - Alias of the user
 * @property {string} email - Mail of the user
 * @property {string} password - Password of the user
 * @property {string} avatar - Avatar's text of the user
 * @property {string} token - Token of the user
 */

//const resetPasswordDataMapper = {
// récupérer un utilisateur par son email, soit par une requête directe soit par une fonction (pas encore définie)