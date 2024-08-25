import { User } from "@/domain/entities";
import { Config } from "@/shared/config/configManager";
import { DataSource } from "typeorm";

export const appDbSource = new DataSource({
    //@ts-ignore
    type: Config.getEnv("DATABASE_TYPE") ?? ("mysql" as string),
    host: Config.getEnv("DATABASE_HOST") ?? "localhost",
    port: parseInt(Config.getEnv("DATABASE_PORT") ?? "3306"),
    username: Config.getEnv("DATABASE_USERNAME") ?? "root",
    password: Config.getEnv("DATABASE_PASSWORD") ?? "",
    database: Config.getEnv("DATABASE_NAME") ?? "",
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
});

export async function initDB() {
    try {
        await appDbSource.initialize();
        console.log("[INIT] database initialized");
    } catch (err: any) {
        console.error("error initiating database: ", err.message + "\n", err.stack);
    }
}
