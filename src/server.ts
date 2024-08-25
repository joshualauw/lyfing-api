import "module-alias/register";
import "reflect-metadata";

import app from "@/adapters/http/express";
import { createServer } from "http";
import { initDB } from "@/infrastructure/database/typeorm";

const server = createServer(app);

server.listen(3001, async () => {
    console.log("server is running");

    await initDB();
});
