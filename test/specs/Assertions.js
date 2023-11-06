let d=new Date();

describe('Assertions Practice', () => {
    it('Verify if correct application is open and image is shown', async () => {
        await browser.url('https://www.ebay.com/');
        browser.maximizeWindow();
        await expect(browser).toHaveUrl('https://www.ebay.com/');
        await expect(browser).toHaveTitleContaining('eBay');
        const ms=d.getMilliseconds();
        await browser.saveScreenshot(`./Screenshots/NewScreenshot_${ms}.png`);
        const promoPoster=await $('//*[@id="rtm_list1"]');
        await expect(promoPoster).toBeDisplayed();
    });

    it('Verify if search field and search button is enabled', async () => {
        const searchField=await $('//*[@id="gh-ac"]');
        const searchButton=await $('//*[@id="gh-btn"]');
        await expect(searchField).toBeEnabled();
        await expect(searchButton).toBeEnabled();
        await searchField.setValue('Bags');
        await searchButton.click();
        const ms=d.getMilliseconds();
        await browser.saveScreenshot(`./Screenshots/NewScreenshot_${ms}.png`);
    });

    it('Verify title is shown on image', async () => {
        await browser.url('https://www.ebay.com/');
        const imgTitle=await $('//*[@id="rtm_list1"]/div/div/div/h2/a/div/span');
        await expect(imgTitle).toHaveTextContaining('school');
    });

    it('Verify if link is present on image', async () => {
        const imgLink=await $('//*[@id="rtm_list1"]/div/div/div/h2/a');
        await expect(imgLink).toHaveLinkContaining('school');
    });

    it('Verify if link present is clickable', async () => {
        const imgLink1=await $('//*[@id="rtm_list1"]/div/div/div/h2/a');
        await expect(imgLink1).toBeClickable();
    });

    it('To click the link and verify new URL', async () => {
        const imgLink2= await $('//*[@id="rtm_list1"]/div/div/div/h2/a');
        imgLink2.click();
        expect(browser).toHaveUrlContaining('school');
        await browser.pause(3000);
        const ms=d.getMilliseconds();
        await browser.saveScreenshot(`./Screenshots/NewScreenshot_${ms}.png`);
    });

    it('Autosuggestions', async () => {
        await browser.url('https://www.amazon.in/');
        await browser.maximizeWindow();
        const searchBox=await $('#twotabsearchtextbox');
        await searchBox.setValue('Samsung Galaxy');
        await browser.pause(2000);
        
        const ms=d.getMilliseconds();
        await browser.saveScreenshot(`./Screenshots/NewScreenshot_${ms}.png`);

        const allSuggestions=await $$('//*[@id="nav-flyout-searchAjax"]/div[2]/div/div[1]/div');
  
        for (let i = 0; i < allSuggestions.length; i++) {
          const element = await allSuggestions[i].getText();
          console.log('Suggestion value is '+element);
          if (element.includes('s23')) {
            console.log("s23");
            const ms=d.getMilliseconds();
            await browser.saveScreenshot(`./Screenshots/NewScreenshot_${ms}.png`);
            await allSuggestions[i].click();
            await browser.pause(3000);
            const ms1=d.getMilliseconds();
            await browser.saveScreenshot(`./Screenshots/NewScreenshot_${ms}.png`);
            break;
          }
        }
  
      })

});