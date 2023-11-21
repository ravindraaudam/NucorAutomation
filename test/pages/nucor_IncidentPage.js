const Nucor_IncidentPageLocators = require("../pageobjects/nucor_IncidentPageLocators");
const { elemLoadHigh } = require("./nucor_NewIncidentPage");
import report from "@wdio/allure-reporter";

class Nucor_IncidentPage extends Nucor_IncidentPageLocators{
    async validateIncidentPage(){
      const incidentTable=await this.openIncidentsTable;
      await expect(incidentTable).toBeDisplayed();
    }

    async navigateToNewIncidentPage(){
        const newIncidentBtn=await this.newIncidentButton;
        await newIncidentBtn.waitUntil(() => newIncidentBtn.isDisplayed());
        await elemLoadHigh();
        await newIncidentBtn.click();
        console.log('Clicked on New Incident button');
    }
}

module.exports=new Nucor_IncidentPage;