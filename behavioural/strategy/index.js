class PayStrategy {
    #resultContainer;

    constructor() {
        // Prevent the class to instantiate
        if (new.target === PayStrategy)
            throw new Error(`Abstract classes cannot be instantiated!`);
    }

    pay(price) {}
}

class MasterCard extends PayStrategy {
    #resultContainer = document.querySelector(`#result`);

    pay(price) {
        this.#resultContainer.textContent = `Pay ${price}€ with MasterCard`;
    }
}

class Visa extends PayStrategy {
    #resultContainer = document.querySelector(`#result`);

    pay(price) {
        this.#resultContainer.textContent = `Pay ${price}€ with Visa`;
    }
}

class Paypal extends PayStrategy {
    #resultContainer = document.querySelector(`#result`);

    pay(price) {
        this.#resultContainer.textContent = `Pay ${price}€ with Paypal`;
    }
}

class PayManager {
    #payStrategy;

    constructor(payStrategy) {
        this.#payStrategy = payStrategy;
    }

    pay(price) {
        return this.#payStrategy.pay(price);
    }
}

function payOrder(obj) {
    const { value } = obj;

    switch (value) {
        case 'MasterCard': {
            const payManager = new PayManager(new MasterCard());
            payManager.pay(99.99);
            break;
        }
        case 'Visa': {
            const payManager = new PayManager(new Visa());
            payManager.pay(99.99);
            break;
        }
        case 'Paypal': {
            const payManager = new PayManager(new Paypal());
            payManager.pay(99.99);
            break;
        }
        default: {
            throw new Error('No valid payment method was selected');
            break;
        }
    }
}
