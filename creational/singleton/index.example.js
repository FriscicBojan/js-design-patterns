class Singleton {
    static #instance = null;

    static getInstance() {
        if (Singleton.#instance !== null) Singleton.#instance = new Singleton(); // there is only one instance
        return Singleton.#instance;
    }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2);