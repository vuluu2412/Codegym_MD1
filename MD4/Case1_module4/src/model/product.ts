import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id:number;
    @Column({type:'varchar'})
    public name:string;
    @Column({type:'double'})
    public price:number;
    @Column({type:'varchar'})
    public description:string;
    @Column({type:'int'})
    public quantity:number;
}