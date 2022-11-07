import {AppDataSource} from "./src/data-source";
import {PhoneBook} from "./src/entity/PhoneBook";
import multer from 'multer';
const upload = multer();
import express, {Request, Response} from "express";
import bodyParser from 'body-parser';
const PORT = 3000;
AppDataSource.initialize().then(async connection => {
    const PhoneBookRepo = connection.getRepository(PhoneBook);
    const app = express();
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
    app.get("/phone/create", (req, res) => {
        res.render("create");
    });
    app.post("/phone/create", upload.none(), async (req, res) => {
        const phoneData = {
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone
        };
        const phone = await PhoneBookRepo.save(phoneData);
        res.render("success");
    });
    app.get("/phone/list", async (req, res) => {
        const phoneBooks = await PhoneBookRepo.find();
        res.render("list", {phoneBooks: phoneBooks})
    });
    app.use(bodyParser.json());
    app.use(express.json());


    app.delete("/phone/:id", async function(req: Request, res: Response) {
        const phone = await PhoneBookRepo.delete(req.params.id);
        return res.send(phone);
    });

    app.listen(PORT, () => {
        console.log("App running with port: " + PORT)
    })
});