// const express = require("express");
import express from "express";
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 8386;
app.get("/", (req, res) => {
    res.send(`<h1 style="color: blue;">Hello World</h1>`);
});
app.get("/hoi", (req, res) => {
    res.send("hello tim viec lam");
});
app.listen(port, () => {
    console.log(`My app is running on port: ${port}`)
    console.log("env port: ", process.env.PORT);
}); 