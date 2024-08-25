import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "@/infrastructure/ioc";
import express from "express";
import cors from "cors";

const server = new InversifyExpressServer(container, null, {
    rootPath: "/api",
});

server.setConfig(async (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({ origin: "*" }));
});

const app = server.build();

export default app;
