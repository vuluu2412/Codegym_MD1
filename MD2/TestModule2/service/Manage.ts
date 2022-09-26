export interface Manage<T>{
    add (t:T);
    findById(id:number):number;
    remove(id:number);
    findAll();
}