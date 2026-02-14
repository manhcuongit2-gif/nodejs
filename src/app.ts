// const express = require("express");
import express from "express";
import 'dotenv/config';
import webRouters from "./routers/web";

const app = express();
const port = process.env.PORT || 8386;

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//config router
webRouters(app);

//config static files
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`My app is running on port: ${port}`)
    console.log("env port: ", process.env.PORT);
});