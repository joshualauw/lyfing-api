import { Container } from "inversify";
import { IUserService, UserService } from "@/application/services";
import { IUserRepository, UserRepository } from "@/domain/repositories";
import { TYPES } from "@/infrastructure/ioc";

import "@/adapters/http/controllers/userController";

const container = new Container();

container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<IUserService>(TYPES.UserService).to(UserService);

export { container };
