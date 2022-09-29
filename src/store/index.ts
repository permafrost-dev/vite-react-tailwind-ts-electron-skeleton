import { makeAutoObservable } from 'mobx';

export class Store {
    counter = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increaseCounter() {
        this.counter += 1;
    }
}

export const store = new Store();

export default store;
