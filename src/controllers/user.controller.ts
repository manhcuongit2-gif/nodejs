import { Request, Response } from "express";
const getHomePage = (req: Request, res: Response) => {
    return res.render("home"); //không cần khai báo đuôi ejs vì đã khai báo view engine là ejs ở app.ts
}
const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user"); //không cần khai báo đuôi ejs vì đã khai báo view engine là ejs ở app.ts
}
export { getHomePage, getCreateUserPage };