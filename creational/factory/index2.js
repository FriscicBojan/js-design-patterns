const TYPE = {
    CAR: `car`,
    MOTORCYCLE: `motorcycle`,
};

class Car {
    #manufacturer;
    #model;
    #color;
    #doors;

    constructor(options) {
        const { manufacturer, model, color, doors } = options;

        this.#manufacturer = manufacturer;
        this.#model = model;
        this.#color = color;
        this.#doors = doors;
    }
}

class Motorcycle {
    #manufacturer;
    #model;
    #color;
    #type;

    constructor(options) {
        const { manufacturer, model, color, type } = options;

        this.#manufacturer = manufacturer;
        this.#model = model;
        this.#color = color;
        this.#type = type;
    }
}

class Factory {
    #type;

    constructor(type) {
        this.#type = type;
    }

    create(options) {
        let vehicle;

        switch (this.#type) {
            case TYPE.CAR: {
                vehicle = new Car(options);
                break;
            }
            case TYPE.MOTORCYCLE: {
                vehicle = new Motorcycle(options);
                break;
            }
            default: {
                throw new Error(`Provided vehicle type is not supported`);
            }
        }

        return vehicle;
    }
}

const CarFactory = new Factory(TYPE.CAR);
const car = CarFactory.create({
    manufacturer: `BMW`,
    model: `e34`,
    color: `Black`,
    doors: `5`,
});
