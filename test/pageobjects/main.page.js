class LoginPage {

    get username () {
        return $('#username');
    }

    get password () {
        return $('#password');
    }

    get loginButton () {
        return $('.radius');
    }

 
    async setUsername (value) {
        await this.username.addValue(value);
    }

    async setPass (value) {
        await this.password.addValue(value);
        await this.btnSubmit.click();
    }

    async clickButton () {
        await this.loginButton.click();
    }

}

export default new LoginPage()