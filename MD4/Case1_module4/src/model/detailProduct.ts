import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class DetailProduct {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id:number;
    @Column({type:'int'})
    public readonly idProduct:number;
    @Column({type:'text'})
    public image:string;
}