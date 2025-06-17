class MainPage {

    get forumBtn () {return $('a[href="https://dou.ua/forums/"]');}
    get lentaBtn () { return $('a[href="https://dou.ua/lenta/"]'); }
    get salariesBtn () { return $('a[href="https://jobs.dou.ua/salaries/"]'); }
    get gameDevBtn() { return $('.menu-site__gamedev'); }
    get searchInput () {return $('#txtGlobalSearch');}

 
    async setSearchInput (value) {
        await this.searchInput.addValue(value);
    }

    async clickOnForumBtn (value) {
        await this.forumBtn.click();
    }

    async clickOnGameDevBtn (value) {
        await this.gameDevBtn.click();
    }

}

export default new MainPage()