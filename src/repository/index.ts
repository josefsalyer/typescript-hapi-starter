export default class Repository<T> {
    public dataSource = new Map();

    public save(id: string, dataToSave: T): void {
        this.dataSource.set(id, dataToSave);
    }

    public getById(id: string): T {
        return this.dataSource.get(id);
    }

    public getAll(): T[] {
        const data: T[] = [];

        this.dataSource.forEach(value => data.push(value));

        return data;
    }

    public updateById(id: string, dataToUpdate: T): void {
        const data = this.dataSource.get(id);

        if (data) {
            this.dataSource.delete(id);
        }

        this.dataSource.set(id, dataToUpdate);
    }

    public delete(id: string): void {
        this.dataSource.delete(id);
    }
}
