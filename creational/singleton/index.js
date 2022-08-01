class Dialog {
    static #instance = null;

    static showDialog() {
        if (Dialog.#instance === null) {
            // Generates the login view
            const target = document.querySelector(`.container.pt-5`);

            const loginForm = document.createElement(`div`);
            loginForm.classList.add(`card`);

            const loginHeader = document.createElement(`h1`);
            loginHeader.classList.add(`card-header`, `p-4`);
            loginHeader.textContent = `Login`;

            const loginBody = document.createElement(`div`);
            loginBody.classList.add(`card-body`);
            loginBody.textContent = `Here comes the body of the login form...`;

            const loginFooter = document.createElement(`div`);
            loginFooter.classList.add(`card-footer`);

            const button = document.createElement(`button`);
            button.classList.add(`btn`, `btn-primary`);
            button.innerText = `Submit`;

            loginFooter.appendChild(button);

            loginForm.appendChild(loginHeader);
            loginForm.appendChild(loginBody);
            loginForm.appendChild(loginFooter);

            target.appendChild(loginForm);

            Dialog.#instance = new Dialog();
        }

        return Dialog.#instance;
    }
}

function doLogin() {
    const loginButton = document.querySelector(`#login-button`);
    loginButton.style.display = `none`;

    Dialog.showDialog(); // singleton instance will always create one dialog
}
