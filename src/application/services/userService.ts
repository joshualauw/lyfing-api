import { UserRepository } from "@/domain/repositories/userRepository";
import { TYPES } from "@/infrastructure/ioc/identifier";
import { inject, injectable } from "inversify";
import { LoginDto } from "@/application/dto/user";
import { IUserService } from "@/application/services";

@injectable()
export class UserService implements IUserService {
    private userRepository: UserRepository;

    public constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async login(payload: LoginDto) {
        try {
            const user = await this.userRepository.findUserByEmail(payload.email);

            return user;
        } catch (err: any) {
            console.error("login failed: ", err.message + "\n", err.stack);
            return null;
        }
    }
}
