const Nucor_MenuPageLocators = require("../pageobjects/nucor_MenuPageLocators");

class Nucor_MenuPage extends Nucor_MenuPageLocators{
    async navigateToIncidents(){
      const incidentElement=await this.incidentsLink;
      await incidentElement.click()
      console.log('Incident link is clicked');
    }
}

module.exports=new Nucor_MenuPage;