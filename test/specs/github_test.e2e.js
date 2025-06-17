import { browser, expect } from '@wdio/globals'
import MainPage from '../pageobjects/main.page_github.js'
import SingUpPage from '../pageobjects/singup.page_github.js'
import NewsLetterPage from '..//pageobjects/newsletter.page_github.js'

describe('Github tests', () => {

    it('check github sing up form', async () => {
        await browser.url('https://github.com/');
        await MainPage.clickOnSingUpBtn()
        await browser.pause(2000)
      
        await SingUpPage.SingUpH1.isDisplayed()
        await expect(SingUpPage.SingUpH1).toHaveText('Create your free account')

        await SingUpPage.setEmailInput('test12398@gmail.com')
        await SingUpPage.setPassInput('Supperpasstest!')
        await SingUpPage.setUsernameInput('NP-12398')
        await SingUpPage.clickOnCountryBtn()

        let malta = await $('/html/body/div[1]/div[4]/div/main/div/div[2]/div[2]/div/div[2]/div/form/div[2]/signups-marketing-consent-fields/div[1]/div[2]/select-panel/dialog-helper/dialog/div[2]/focus-group/div/div[1]/action-list/div/ul/li[135]/button')
        await malta.click()
        await browser.pause(2000)

        await SingUpPage.checkConsentCheckBox()
        await browser.pause(5000)
        await SingUpPage.clickOnContinueBtn()

    })

    it('check github subscribe', async () => {
        await browser.url('https://github.com/');
      
        await MainPage.SubscribeBtn.scrollIntoView()
        await expect(MainPage.SubscribeBtn).toBeDisplayedInViewport()

        await MainPage.clickOnSubscribeBtn()

        const url = await browser.getUrl();
        console.log('👉 Url:', url);
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/');
        await browser.pause(2000)

        await expect(NewsLetterPage.H1).toBeDisplayedInViewport();

        await expect(NewsLetterPage.H1).toHaveText('Subscribe to our developer newsletter')


        await NewsLetterPage.setEmailInput('test12398@gmail.com')
        await NewsLetterPage.clickOnCountryOption()

    
        await browser.pause(2000)

        await NewsLetterPage.checkConsentCheckBox()
        await browser.pause(5000)
        await NewsLetterPage.clickOnSubscribeBtn()

        let title = await $('#hero-section-brand-heading')
        await expect(title).toHaveText('Thanks for subscribing!');

    })

    it('check github Search word in result', async () => {
        await browser.url('https://github.com/');

        await MainPage.clickOnSearchBtn()
        await MainPage.typeInSearchInput('act')
        await browser.keys('Enter');

        let searchResult1 = await $('/html/body/div[1]/div[4]/main/react-app/div/div/div[1]/div/div/div[2]/div/div/div[1]/div[4]/div/div/div[1]/div/div[1]/h3/div/div[2]/a')
        let attr = await searchResult1.getAttribute('href')
        await expect(attr).toContain('act')

    })

    it('check github prissing', async () => {
        await browser.url('https://github.com/');

        await MainPage.clickOnPricingLink()
        //let pricingurl = await browser.getUrl();
        await expect(browser).toHaveUrl('https://github.com/pricing');

        let compareLink = await $('a[href="#compare-features"]')
        await compareLink.scrollIntoView()
        await browser.pause(2000)
        await compareLink.click()

        let title = await $('//div[contains(@class, "js-compare-features-item")]/h1')
        await expect(title).toHaveText('Compare features');

    })

    it('check github Enterprise link', async () => {
        await browser.url('https://github.com/');
        
        await MainPage.clickOnEnterpriseLink()

        let startTrialLink = await $('//div[contains(@class, "CTABanner-content")]//a[contains(@href, "/organizations/enterprise_plan")]')
        await startTrialLink.waitForDisplayed({ timeout: 5000 });
        await startTrialLink.scrollIntoView()
        await browser.pause(2000)
        await expect(startTrialLink).toBeDisplayedInViewport()
        await startTrialLink.click()
        await browser.pause(2000)
        let trialTitle = await $('.h1')       
        await expect(trialTitle).toBeDisplayedInViewport();
        await expect(trialTitle).toHaveText('Pick your trial plan');

        const enterpriseCloudCard = await $('//a[contains(@href, "/enterprise/trial/start") and .//h2[contains(text(), "Enterprise Cloud")]]');
        await expect(enterpriseCloudCard).toBeDisplayed();
        await enterpriseCloudCard.click();
        await browser.pause(2000)
        await expect(browser).toHaveUrl(expect.stringContaining('/signup'))
    })


})

