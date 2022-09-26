export interface Manage<T> {
    add(t: T): void;
    findById(id: number): T;
    findByIndex(index: number): T;
    findAll(): void;
}