
class MiscFunctions{
    async brwSyncMedium(){
        await browser.pause(10000);
    }

    async brwSyncLow(){
        await browser.pause(5000);
    }

    async brwSyncHigh(){
        console.log('it came here');
        await browser.pause(50000);
    }

    async captureScreenshot(screenshotDesc){
        let d= new Date;
        const ms=d.getMilliseconds
        browser.saveScreenshot('./Screenshots/'+screenshotDesc+ms+'.png')
    }

    async elemLoad(){
        await browser.pause(2000);
    }

    async elemLoadLow(){
        await browser.pause(1000);
    }
    

    async elemLoadMed(){
        await browser.pause(3000);
    }

    async addLogs(logMsg){
        report.addStep(logMsg);
    }
}

module.exports=new MiscFunctions;