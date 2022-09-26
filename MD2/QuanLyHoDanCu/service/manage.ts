export interface Manage<T>{
    add(t:T);
    findAll();
    edit(id:number,t:T);
    findById(id:number);
}