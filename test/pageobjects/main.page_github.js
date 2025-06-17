class MainPage {

    get SingUpBtn() { return $('.HeaderMenu-link--sign-up'); }
    get SubscribeBtn() { return $('a[href = "https://resources.github.com/newsletter/"]'); }
    get SearchBtn() { return $('.header-search-button'); }
    get SearchInput() { return $('#query-builder-test') }
    get PricingLink() { return $('a[href="https://github.com/pricing"]'); }
    get EnterpriseLink() { return $('a[href = "/enterprise"]'); }
    
    

    async clickOnSingUpBtn () {
        await this.SingUpBtn.click();
    }

    async clickOnSubscribeBtn() {
        await this.SubscribeBtn.scrollIntoView()
        await this.SubscribeBtn.click();
    }

    async clickOnSearchBtn() {
        await this.SearchBtn.click();
    }
    async typeInSearchInput(value) {
        await this.SearchInput.setValue(value);
        await browser.keys('Enter');
    }

    async clickOnPricingLink () {
        await this.PricingLink.click();
    }

    async clickOnEnterpriseLink() {
        await this.EnterpriseLink.click();
    }

}

export default new MainPage()