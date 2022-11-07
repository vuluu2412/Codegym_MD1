// import express from "express";
// import bodyParser from "body-parser";
// const PORT = 3000;
// const app = express();
// app.use(bodyParser.json());
// app.get('/', (req, res) => {
//     res.end("<h1>Hello world!</h1>")
// })
// app.listen(PORT, () => {
//     console.log("App running on port: "+ PORT)
// })

import express from "express";
import {Request, Response} from "express";
import {AppDataSource} from "./model/src/data-source";
import {User} from "./model/src/entity/User";

// typeorm khởi tạo kết nối với database
AppDataSource.initialize().then(async connection => {
    // Sử dụng đối tượng userRepository để thao tác với database
    const userRepository = connection.getRepository(User);

    const app = express();
    app.use(express.json());

    app.get("/users", async function(req: Request, res: Response) {
        const users = await userRepository.find();
        res.json(users);
    });

    // app.get("/users/:id", async function(req: Request, res: Response) {
    //     const results = await userRepository.findOne(req.params.id);
    //     return res.send(results);
    // });

    app.post("/users", async function(req: Request, res: Response) {
        const user = await userRepository.create(req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    // app.put("/users/:id", async function(req: Request, res: Response) {
    //     const user = await userRepository.findOne(req.params.id);
    //     userRepository.merge(user, req.body);
    //     const results = await userRepository.save(user);
    //     return res.send(results);
    // });

    app.delete("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.delete(req.params.id);
        return res.send(results);
    });

    // start express server
    app.listen(3000);
});