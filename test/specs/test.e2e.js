import { browser, expect } from '@wdio/globals'
import asser from "assert/strict"
import { assert } from 'console';
import LoginPage from '../pageobjects/login.page.js'
//import SecurePage from '../pageobjects/secure.page.js'
import MainPage from '../pageobjects/doumain.page.js'
import GameDevnPage from '../pageobjects/dougamedev.page.js'

describe.skip('WDio main', () => {

    xit('should check dou pages', async () => {
        await browser.url('https://dou.ua/');
        await MainPage.clickOnForumBtn()

        await MainPage.clickOnGameDevBtn()
  
        expect(GameDevnPage.topGameLink).toBeClickable()

        await GameDevnPage.clickOnTopGameLink()
    })

    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io/');
        const title = await browser.getTitle();
        console.log('👉 TITLE:', title);
        await expect(browser).toHaveTitle(
            'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO'
        );
        // await LoginPage.open()

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
    })
    xit('should show addValue command', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)
        let input = await $('#username')
        await input.addValue("Hello")
        await browser.pause(2000)

        await input.addValue("123")
        await browser.pause(2000)

        expect(input).toHaveValue("Hello123")

    })
    xit('should show setValue command', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)
        let input = await $('#username')
        await input.setValue("world")
        await browser.pause(2000)

   console.log(await input.getValue())

        await expect(input).toHaveValue("world")

    })

    xit('should show click command', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)
        let loginButton = await $('.radius')
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $('#username')
        await inputUsername.setValue("tomsmith")
        await browser.pause(2000)

        let inputPassword = await $('#password')
        await inputPassword.setValue("SuperSecretPassword!")
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)

    })

    xit('should show getAttribute command', async () => {
        await browser.url(`https://dou.ua/search`)
        let inpurSearch = await $('#gsc-i-id1')
        let attr = await inpurSearch.getAttribute('aria-label')
        console.log("👉 Placeholder is:" + attr)
    
        await inpurSearch.setValue('Cat')
        attr = await inpurSearch.getValue()
        await browser.pause(2000)
        console.log("👉 Value attr is:" + attr)
    })

    xit('should show getLocation command', async () => {
        await browser.url(`https://dou.ua`)
        let inpurSearch = await $('#txtGlobalSearch')
        let location = await inpurSearch.getLocation()
        console.log("👉 Location is:" + location) //in log will be array [object Object]
    
        let xlocation = await inpurSearch.getLocation('x')
        console.log("👉 Location by x is:" + xlocation) // number in log
    })

    xit('should show getText command', async () => {
        await browser.url('https://webdriver.io/');
       let subtitle = await $('.hero__subtitle')
        console.log('👉 Subtitle:' + await subtitle.getText());
       
    })

    xit('should show that element is clickable', async () => {
        await browser.url('https://webdriver.io/');
        const startButton = await $('.button[href="/docs/gettingstarted"]')
        let clickable = await startButton.isClickable()
        console.log('👉 Button is clickable:' + clickable);
       
    })

    xit('should show that element is diaplayed', async () => {
        await browser.url('https://webdriver.io/');
        const startButton = await $('.button[href="/docs/gettingstarted"]')
        let displayed = await startButton.isDisplayed()
        console.log('👉 Button is displayed:' + displayed);
       
    })

   xit('should show that element is visible in viewport', async () => {
        await browser.url('https://webdriver.io/');
        const startButton = await $('.button[href="/docs/gettingstarted"]')
        let displayedInViewport = await startButton.isDisplayed({ withinViewport: true })
        console.log('👉 Button is visible:' + displayedInViewport);
       
   })
    
   xit('should show that element is enabled', async () => {
    await browser.url('https://webdriver.io/');
    const startButton = await $('.button[href="/docs/gettingstarted"]')
    let isEnabled = await startButton.isEnabled()
    console.log('👉 Button is enabled:' + isEnabled);
   
   })
    
   xit('should show that element is focused', async () => {
    await browser.url('https://webdriver.io/');
    const startButton = await $('.button[href="/docs/gettingstarted"]')
    let isFocused = await startButton.isFocused()
    console.log('👉 Button is focused before click:' + isFocused);
       await browser.pause(2000);
       await startButton.click();
       console.log('👉 Button is focused after click:' + await startButton.isFocused());
       await browser.pause(2000)
   })
    
   xit('should show scroll', async () => {
    await browser.url('https://webdriver.io/');
       const startLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
       await browser.pause(2000);
    await startLink.scrollIntoView()
    await browser.pause(2000);
   await startLink.saveScreenshot('linkscreenshot.png')
   })
    
   xit('should show newWindow', async () => {
    await browser.url('https://webdriver.io/');
       await browser.newWindow('https://www.google.com/');
       await browser.pause(2000);
       await browser.switchWindow('https://webdriver.io/');
       await browser.pause(2000);
   })
    
   xit('should show waitUntil command', async () => {
       await browser.url('https://webdriver.io/');
       
       await browser.waitUntil(async () => { 
           return $('.footer__link-item[href="/docs/gettingstarted"]').isDisplayed({ withinViewport: true });
       }, {
        timeout: 2000,
        timeoutMsg: "👉 is not Displayed"
      })
   })
    
   xit('should get html for element', async () => {
    await browser.url('https://webdriver.io/');
       const outerHtml = await $('.dropdown__menu').getHTML()
       console.log('👉 outer Html:' + outerHtml);

       const innerHtml = await $('.dropdown__menu').getHTML(false)
       console.log('👉 inner Html:' + innerHtml);
   })
    
   xit('should get html for element', async () => {
    await browser.url('https://webdriver.io/');
       assert(1 === 1, "1 not eaquel 1") // === (три дорівнює перевіряє в тому числі і на тип даних)
       assert(1 === "hello", "1 not eaquel hello")
   })
    
   xit('should have correct title', async () => {

    await LoginPage.open()

    await LoginPage.login('tomsmith', 'SuperSecretPassword!')
   // await expect(SecurePage.flashAlert).toBeExisting()
   // await expect(SecurePage.flashAlert).toHaveText(
   //     expect.stringContaining('You logged into a secure area!'))
}) 

})

describe.skip('Home work', () => {
    xit('API page have correct title and url', async () => {
        await browser.url('https://webdriver.io/');

        let api = await $('#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > a:nth-child(4)')
        await api.click()
        await browser.pause(2000)

        const url = await browser.getUrl();
        console.log('👉 URL: ' + url)
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api');

        let h1 = await $('h1')
        console.log('👉 H1: ' + await h1.getText());
        await expect(h1).toHaveText('Introduction')
     
    })

    xit('API page have WebDriver url', async () => {
        await browser.url('https://webdriver.io/');

        let api = await $('#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > a:nth-child(4)')
        await api.click()
        await browser.pause(2000)

        // const url = await browser.getUrl();
        // console.log('👉 URL: ' + url)
        // await expect(browser).toHaveUrl('https://webdriver.io/docs/api');

        const link = await $('=WebDriver')
        await expect(link).toHaveText('WebDriver')
        await expect(link).toHaveAttribute('href', '/docs/api/webdriver')
        console.log('👉 href:' + await link.getAttribute('href'))
     
    })

    xit('input in Search', async () => {
        await browser.url('https://webdriver.io/');

        let api = await $('#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > a:nth-child(4)')
        await api.click()
        await browser.pause(2000)

        let buttonSearch = await $('#__docusaurus > nav > div.navbar__inner > div.navbar__items.navbar__items--right > div.navbarSearchContainer_Wykr > button')
        await buttonSearch.click()
        await browser.pause(2000)
        let inputSearch = await $('#docsearch-input')
    
        await inputSearch.setValue('Cat')
        let value = await inputSearch.getValue()
        let attr = await inputSearch.getAttribute('value')
        await browser.pause(2000)
        console.log("👉 Value attr is:" + attr)
        console.log("👉 Value is:" + value)
        await expect(value === 'Cat');
     
await browser.pause(2000)
    await inputSearch.clearValue()
    value = await inputSearch.getValue()
    await expect(value === '')

    })

    it.skip('open API page, visisble blog and clicable protocols, untilView title', async () => {
        await browser.url('https://webdriver.io/');

        let api = await $('nav a[href="/docs/api"]');
        await api.click();
        await browser.pause(2000);

        const blogLink = await $('.footer__link-item[href="/blog"]');
       await browser.pause(2000);
        await blogLink.scrollIntoView();
        await browser.pause(2000);
        await blogLink.isDisplayed();

        const protocolsLink = await $('nav a[href="/docs/api/protocols"]');
        await browser.pause(2000);
        await protocolsLink.isDisplayed();
        await protocolsLink.isClickable();
        await browser.pause(2000);

        await protocolsLink.click();
        await browser.waitUntil(async () => { 
            return $('#webdriver-protocol').isDisplayed({ withinViewport: true });
        }, {
         timeout: 2000,
         timeoutMsg: "👉 is not Displayed"
        })

    })

    xit('DOU Search present', async () => {
        await browser.url('https://dou.ua/');

        let inputSearch = await $('#txtGlobalSearch')
        let displayedInViewport = await inputSearch.isDisplayed({ withinViewport: true })
        console.log('👉 Button is visible:' + displayedInViewport);
        let isEnabled = await inputSearch.isEnabled()
        console.log('👉 Button is enabled:' + isEnabled);

    })
    xit('DOU Search has attribute', async () => {
        await browser.url('https://dou.ua/');

        let inputSearch = await $('#txtGlobalSearch')
        await expect(inputSearch).toHaveAttribute('placeholder', 'пошук');
    

    })

    xit('DOU Search word in url', async () => {
        await browser.url('https://dou.ua/');

        let inputSearch = await $('#txtGlobalSearch')
        await inputSearch.setValue('tester')
        await browser.keys('Enter');
        const url = await browser.getUrl();
        console.log('👉 URL: ' + url)
        expect(url).toContain('q=tester');
    })

    xit('DOU Search word in result', async () => {
        await browser.url('https://dou.ua/');

        let inputSearch = await $('#txtGlobalSearch')
        await inputSearch.setValue('tester')
        await browser.keys('Enter');

        const searchTerm = 'tester';

// Отримуємо всі результати
const resultElements = await $$('div.gsc-webResult.gsc-result');

// Перевіримо кожен результат
for (const result of resultElements) {
  // Витягуємо текст заголовка
  const titleEl = await result.$('.gs-title');
  const titleText = await titleEl.getText();

  // Витягуємо текст опису
  const snippetEl = await result.$('.gs-snippet');
  const snippetText = await snippetEl.getText();

  // Об'єднуємо все в один текст для перевірки
  const combinedText = `${titleText} ${snippetText}`.toLowerCase();

  // Перевірка, що searchTerm входить до тексту
  expect(combinedText).toContain(searchTerm.toLowerCase());
}

    })
  
    xit('DOU Search not present after searching', async () => {
        await browser.url('https://dou.ua/');

        let inputSearch = await $('#txtGlobalSearch')
        await inputSearch.setValue('tester')
        await browser.keys('Enter');
        await browser.pause(2000)
        expect(await inputSearch.isExisting()).toBe(false);

    })

})

