import { User } from "@/domain/entities";
import { EntityNotFoundError, Repository } from "typeorm";
import { injectable } from "inversify";
import { appDbSource } from "@/infrastructure/database/typeorm";
import { IUserRepository } from "@/domain/repositories";

@injectable()
export class UserRepository implements IUserRepository {
    private userRepository: Repository<User>;

    public constructor() {
        this.userRepository = appDbSource.getRepository(User);
    }

    public async findUserByEmail(email: string) {
        const user = await this.userRepository.findOneBy({ email });

        if (user == null) {
            throw new EntityNotFoundError(User, "user not found");
        }

        return user;
    }
}
