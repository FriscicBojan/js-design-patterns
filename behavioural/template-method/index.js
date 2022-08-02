class Template {
    show() {
        document.write(`Header`);
        document.write(`Left Section`);
        document.write(`Footer`);

        this.makeContent();
    }

    makeContent() {}
}

class LoginPage extends Template {
    makeContent() {
        document.write(`This is the Login page`);
    }
}

class BookPage extends Template {
    makeContent() {
        document.write(`This is the Book page`);
    }
}

const loginPage = new LoginPage();
loginPage.show();

const bookPage = new BookPage();
bookPage.show();
