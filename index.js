import 'dotenv/config';

import express from "express";

const app = express();

const PORT = 3000;

// Pour autoriser l'envoi de JSON
app.use(express.json());

app.listen(PORT, ()=>{
    console.log("Back is listening on http://localhost:3000");
});


