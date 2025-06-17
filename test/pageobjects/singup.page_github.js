class SingUpPage {

    get SingUpH1() { return $('.signups-rebrand__container-h1'); }
    get EmailInput() { return $('#email'); }
    get PassInput() { return $('#password'); }
    get UsernameInput() { return $('#login'); }
    get CountryBtn() { return $('.country-select-button'); }
    get ConsentCheckBox() { return $('#user_signup\\[marketing_consent\\]'); }
    get ContinueBtn() { return $('.signup-form-fields__button'); }
    
    async setEmailInput (value) {
        await this.EmailInput.addValue(value);
    }

    async setPassInput (value) {
        await this.PassInput.addValue(value);
    }

    async setUsernameInput (value) {
        await this.UsernameInput.addValue(value);
    }

    async clickOnCountryBtn () {
        await this.CountryBtn.click();
    }
   
    async checkConsentCheckBox () {
await this.ConsentCheckBox.click();
    }

    async clickOnContinueBtn () {
        await this.ContinueBtn.click();
    }

}

export default new SingUpPage()