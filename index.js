import "dotenv/config";

import cors from "cors";

import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

import router from "./app/routers/index.js";

import expressJSDocSwagger  from 'express-jsdoc-swagger';
import options from './app/services/apiDocs.js'

expressJSDocSwagger(app, options);

// CORS middleware
const allowedOrigins = [
    'http://localhost:5173', 
    'https://my-little-gamebook.netlify.app',
];

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true, // Allow cookies & auth headers
}));

// Pour autoriser l'envoi de JSON si nécessaire :
app.use(express.json());
// Pour autoriser la réception de données venant de formulaires :
app.use(express.urlencoded({ extended: true}));

app.use(router);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Back is listening on port ${PORT}`);
});


