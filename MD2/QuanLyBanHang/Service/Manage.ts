export interface Manage<T>{
    add (t:T);
    findById(id:number):T;
    update(id:number,t:T);
    remove(id:number);
    findAll();
}