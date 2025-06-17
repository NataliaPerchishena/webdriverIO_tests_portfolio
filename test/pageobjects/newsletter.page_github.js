class NewsLetterPage {

    get H1() { return $('#hero-section-brand-heading'); }
    get EmailInput() { return $('[name="emailAddress"]'); }
    get CountryOption() { return $('//*[@id="country"]/option[@value="BR"]'); }
    get ConsentCheckBox() { return $('#gated-agree-marketingEmailOptin1'); }
    get SubscribeBtn () {return $('//*[text()="Subscribe"]');}
    
    async setEmailInput (value) {
        await this.EmailInput.addValue(value);
    }

    async clickOnCountryOption () {
        await this.CountryOption.click();
    }
   
    async checkConsentCheckBox () {
        await this.ConsentCheckBox.scrollIntoView()
        await this.ConsentCheckBox.waitForDisplayed();
        await this.ConsentCheckBox.click();
    }

    async clickOnSubscribeBtn () {
        await this.SubscribeBtn.scrollIntoView()
        await this.SubscribeBtn.isClickable();
        await this.SubscribeBtn.click();
    }

}

export default new NewsLetterPage()
