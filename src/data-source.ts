import "reflect-metadata"
import { DataSource } from "typeorm"
import { Account } from "./entity/Account"
import { Bank } from "./entity/Bank"
import { Currency } from "./entity/Currency"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "aram",
    password: "Aramo2003%",
    database: "exampleDb",
    synchronize: true,
    logging: false,
    entities: [Account, Bank, Currency],
    migrations: [],
    subscribers: [],
})
