const { assert } = require("chai");
const Nucor_HomePageLocators = require("../pageobjects/nucor_HomePageLocators");
const { elemLoad, captureScreenshot, elemLoadMed } = require("./miscFunctions");
const { addStep } = require("@wdio/allure-reporter");


class Nucor_HomePage extends Nucor_HomePageLocators{
    async validateHomePage(){
      const homePageElem= await this.homePageElement;
      await homePageElem.waitUntil(
        
        async function () {
          const homepageElemText=await homePageElem.getText()
        return (homepageElemText) === 'Nucor Steel - Indiana'
      }, 
      {
        timeout: 15000,
        timeoutMsg: 'Expected text: Nucor Steel - Indiana'

      })
      //const homePageText=await homePageElem.getText();
      //console.log('This is text of homepage var = '+homePageText);
      //assert.equal(homePageText,'Nucor Steel - Indiana')
      
    }

    async navigateToMenu(){
        const menuElement=await this.menuButton;
        await menuElement.waitUntil(() => menuElement.isDisplayed());
        await elemLoadMed();
        await menuElement.click()
        addStep('Navigated to Menu section');
        await captureScreenshot('Navigated to Menu section');
        console.log('Clicked on Menu button');
    }
}

module.exports=new Nucor_HomePage;