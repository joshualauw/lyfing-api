import { User } from "@/domain/entities";

export interface IUserRepository {
    findUserByEmail(_1: string): Promise<User | null>;
}
