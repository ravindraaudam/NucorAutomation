const { assert } = require("chai");
const Nucor_LoginPageLocators = require("../pageobjects/nucor_LoginPageLocators");
const { brwSyncLow , addLogs, captureScreenshot } = require("./miscFunctions");
const UserVals = {
    appUrl:'https://nmstest.nucorservices.com/app/app-home/app-home.aspx',
    loginId: 'crw-raudam@nucor.com',
    loginPw: 'Welcome123!'
}

import report from "@wdio/allure-reporter";

class Nucor_LoginPage extends Nucor_LoginPageLocators{
    async loginToApplication(){
        await this.username.setValue(UserVals.loginId);
        report.addStep('Username entered: '+UserVals.loginId)
        await captureScreenshot('Username entered');
        await this.nextButton.click();
        await this.password.setValue(UserVals.loginPw);
        report.addStep('Password entered: '+UserVals.loginPw)
        await captureScreenshot('Password entered');
        await browser.pause(2000);
        await this.nextButton.click();
        await this.textOTPOption.click();
        console.log('Sign In successful');
    }

    async openUrl(){
        browser.url(UserVals.appUrl);
        await browser.maximizeWindow();
        report.addStep('Navigated to given URL successfully');
        await captureScreenshot('Navigated to URL successfully: '+UserVals.appUrl);
    }
}

module.exports=new Nucor_LoginPage;