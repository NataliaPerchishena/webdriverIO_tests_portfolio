class GameDevnPage {

    get topGameLink () {return $('//*[text()="Топ ігор місяця"]');}

    async clickOnTopGameLink (value) {
        await this.topGameLink.click();
    }

}

export default new GameDevnPage()