import express, { Express } from "express";

const router = express.Router();

const webRouters = (app: Express) => {
    router.get("/", (req, res) => {
        res.render("home.ejs");
    });
    router.get("/trangchu", (req, res) => {
        res.send("hello trang chu xin chao cac ban");
    });
    router.get("/hoi", (req, res) => {
        res.send("hello tim viec lam");
    });
    app.use("/", router);
}

export default webRouters;