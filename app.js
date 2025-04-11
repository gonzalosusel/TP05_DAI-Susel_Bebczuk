import express from "express";
import time from "./time.js"

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("¡Bienvenido a nuestro TP!");
});

app.get("/hora", (req, res) => {
    res.send(time());
});

app.get("/fecha-completa", (req, res) => {
    res.send(new Date().toString());
});

const correrApp = () => app.listen(PORT);

export default correrApp;