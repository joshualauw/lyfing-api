import dotenv from "dotenv";
dotenv.config();

export class Config {
    public static getEnv(key: string) {
        try {
            const value = process.env[key];
            if (!value) {
                throw new Error(`Environment variable ${key} is not set.`);
            }
            return value;
        } catch (err: any) {
            console.error(err.message + "\n", err.stack);
            return null;
        }
    }
}
