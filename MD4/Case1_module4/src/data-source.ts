import "reflect-metadata"
import {DataSource} from "typeorm"
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "case1module4",
    synchronize: true,
    logging: false,
    entities: ["dist/src/model/*.js"]
})