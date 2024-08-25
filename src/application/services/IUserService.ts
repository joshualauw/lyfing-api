import { LoginDto, LoginUserDto } from "@/application/dto/user";

export interface IUserService {
    login(_1: LoginDto): Promise<LoginUserDto | null>;
}
