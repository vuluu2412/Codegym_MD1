import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;
    @Column({type: 'text'})
    public username: string;
    @Column({type: 'text'})
    public password: string;
}