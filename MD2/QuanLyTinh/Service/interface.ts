export interface Manager<T> {
    add(t: T);

    findAll();

    findByID(id: number);
}