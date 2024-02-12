import "dotenv/config";

import express from "express";

const app = express();

const PORT = 3000;

// Pour autoriser l'envoi de JSON si nécessaire
app.use(express.json());

app.listen(PORT, ()=>{
    console.log("Back is listening at http://localhost:3000");
});


