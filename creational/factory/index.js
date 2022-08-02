class Product {
    print() {}
}

class Computer extends Product {
    print() {
        document.write(`Macbook Pro`);
    }
}

class Mouse extends Product {
    print() {
        document.write(`Logitech Mouse`);
    }
}

const TYPE = {
    COMPUTER: `computer`,
    MOUSE: `mouse`,
};

class Factory {
    static create(type) {
        let product = null;

        switch (type) {
            case TYPE.COMPUTER: {
                product = new Computer();
                break;
            }
            case TYPE.MOUSE: {
                product = new Mouse();
                break;
            }
            default: {
                throw new Error(
                    `You have tried to create an unsupported product.`
                );
            }
        }

        return product;
    }
}

const computer = Factory.create(TYPE.COMPUTER);
computer.print();

const mouse = Factory.create(TYPE.MOUSE);
mouse.print();
