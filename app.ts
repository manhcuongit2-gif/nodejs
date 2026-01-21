// const express = require("express");
import express from "express";
const app = express();
const port = 8386;
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.get("/hoi", (req, res) => {
    res.send("hello tim viec lam");
});
app.listen(port, () => {
    console.log(`My app is running on port: ${port}`)
});