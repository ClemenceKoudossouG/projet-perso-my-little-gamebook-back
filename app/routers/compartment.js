import { compartmentController } from "../controllers/index.js";

import { Router } from "express";
const router = Router();

/**
    * GET /compartments
    * @summary Get all compartments
    * @tags Compartment
    * @return {[Compartment]} 200 - Success response - application/json
*/
router.get('/', compartmentController.getAllCompartments); // pour récupérer toutes les cases créées dans une histoire

/**
     * GET /compartments/class/{class}
     * @summary Get compartments by class
     * @tags Compartment
     * @param {string} class.path.required - compartment identifier
     * @return {[Compartment]} 200 - Success response - application/json
     * @return {ApiError} 400 - Error: Bad Request - application/json
     * @return {ApiError} 404 - Error: Compartments not found - application/json
*/
router.get('/class/:compartmentClassName', compartmentController.getAllCompartmentsByClass); // pour récupérer toutes les cases d'une certaine classe

/**
     * GET /compartments/{id}
     * @summary Get one compartment
     * @tags Compartment
     * @param {number} id.path.required - compartment identifier
     * @return {Compartment} 200 - Success response - application/json
     * @return {ApiError} 400 - Error: Bad request - application/json
     * @return {ApiError} 404 - Error: Compartment not found - application/json
*/
router.get('/:id(\\d+)', compartmentController.getOneCompartment); // pour récupérer une case en particulier

export default router;