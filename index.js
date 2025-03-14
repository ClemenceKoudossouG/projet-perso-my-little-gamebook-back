import "dotenv/config";

import cors from "cors";

import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

import router from "./app/routers/index.js";

import expressJSDocSwagger  from 'express-jsdoc-swagger';
import options from './app/services/apiDocs.js'

expressJSDocSwagger(app)
//(options)

// Pour accéder aux ressources d'un autre serveur (requêter notre API via le serveur Front) :
app.use(cors({
    origin: process.env.FRONTEND_URL || '*', // Allow frontend URL from env
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true // Allow cookies & auth headers
}));


// Pour autoriser l'envoi de JSON si nécessaire :
app.use(express.json());
// Pour autoriser la réception de données venant de formulaires :
app.use(express.urlencoded({ extended: true}));

app.use(router);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Back is listening at http://0.0.0.0:${PORT}`);
});


