import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ length: 80 })
    name: string;

    @Column("text", { nullable: true })
    bio: string;

    @Column()
    email: string;

    @Column({ default: false })
    isEmailActivated: boolean;

    @Column()
    password: string;
}
