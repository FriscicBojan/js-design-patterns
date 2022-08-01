class Singleton {
    static #instance = null;

    static getInstance() {
        if (Singleton.#instance !== null) Singleton.#instance = new Singleton(); // there is only one instance
        return Singleton.#instance;
    }
}

const instanceOne = Singleton.getInstance();
Object.freeze(instanceOne);

const instanceTwo = Singleton.getInstance();
Object.freeze(instanceTwo);

console.log(instanceOne === instanceTwo);
