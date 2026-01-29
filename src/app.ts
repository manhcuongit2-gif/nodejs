// const express = require("express");
import express from "express";
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 8386;

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/hoi", (req, res) => {
    res.send("hello tim viec lam");
});
app.listen(port, () => {
    console.log(`My app is running on port: ${port}`)
    console.log("env port: ", process.env.PORT);
}); 