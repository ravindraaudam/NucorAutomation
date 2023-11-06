const Nucor_NewIncidentPageLocators = require("../pageobjects/nucor_newIncidentPageLocators");
const { captureScreenshot, elemLoad, elemLoadLow, elemLoadMed } = require("./miscFunctions");
import report from "@wdio/allure-reporter";

class Nucor_NewIncidentPage extends Nucor_NewIncidentPageLocators{
    async createNucorIncident(whoHadIncident){
        let nonNucorFlag=false;
        let driverFlag=false;
        await elemLoad();

        switch (whoHadIncident) {
            case 'NonNucor':
                await this.nonNucorRadioButton.click();
                nonNucorFlag=true;
                break;

            case 'Driver':
                await this.driverRadioButton.click();
                driverFlag=true;
                break;
        }

         await this.recordable_Yes.click();
         console.log('Selected recordable incident');
         const serious_RadioBtn=await this.serious_Yes;
         await browser.waitUntil(() => serious_RadioBtn.isClickable())
         await serious_RadioBtn.click();
         console.log('Selected incident quality as serious');
         await this.preJobDiscussion_Yes.click();
         console.log('Selected Pre Job Discussion')
        await this.take5_Yes.click();
        console.log('Selected take 5 completed');
        await browser.pause(2000);
        await this.jsaTask_Yes.click();
        console.log('Selected JSA');
        await this.changeExistingJSA_Yes.click();

        await captureScreenshot('General Information Entered successfully');
        report.addStep('General Information Entered Successfully');

        //await this.incidentTypeDropDown.click();
        await this.selectFromSearchDropdown('Equipment Failure',this.incidentTypeDropDown_New);

        //await this.incidentTypeDropDown.selectByVisibleText('Equipment Failure');
        console.log('Selected Incident Type');
        await this.categoryDropDown.selectByVisibleText('Crane');
        console.log('Selected category');
        await this.dateOfIncident.setValue('09/25/2023');
        console.log('Entered date of incident');
        await this.timeofIncident_Hr.selectByVisibleText('1');
        await this.timeofIncident_Min.selectByVisibleText('05');
        await this.timeofIncident_AmPm.selectByVisibleText('AM');
        console.log('Selected time of incident');
        await this.nucorShift.selectByVisibleText('Night');
        console.log('Selected shift of employee');
        await this.nucorCrew.selectByVisibleText('B Crew');
        console.log('Selected crew type of employee');
        await this.incidentReportedDate.setValue('09/26/2023');

        await captureScreenshot('General Information Entered1');
        report.addStep('Incident Information Entered Successfully');

        if (nonNucorFlag) {
            await this.nonNucorInformation();
            await captureScreenshot('Non Nucor Information Entered');
            report.addStep('Non Nucor Information Entered Successfully');
        } else {
            await this.teammateInformation();  
            await captureScreenshot('Teammate Information Entered'); 
            report.addStep('Teammate Information Entered Successfully');
        }

        console.log('Entered incident reporting date');

        //await this.incidentOccurredMill.selectByVisibleText('Cold Mill');
        await this.selectFromSearchDropdown('Cold Mill',this.incidentOccurredMill_New);
        console.log('Selected Mill where incident occurred');

        await this.incidentOccurredArea.scrollIntoView();
        await this.incidentOccurredArea.selectByVisibleText('Administration');
        console.log('Selected Area where incident occurred');
        //await this.incidentOccurredSupervisor.selectByVisibleText('Bell, Nathan (Cold Mill)');
        await this.selectFromSearchDropdown('Bell, Nathan',this.incidentOccurredSupervisor_New);

        console.log('Selected supervisor');
        await this.incidentDetailsDescription.setValue('Test Description');
        console.log(('Entered detailed description'));
        await this.incidentCorrectiveAction.setValue('Test Description');
        console.log('Entered corrective action');
        await this.drugScreenHour.selectByVisibleText('1');
        await this.drugScreenMin.selectByVisibleText('05');
        await this.drugScreenAmPm.selectByVisibleText('AM');
        console.log('Selected Drug Screen Time');

        await captureScreenshot('Incident Information Entered'); 
        report.addStep('Incident Information Entered Successfully');

        if (nonNucorFlag) {
            await this.drugTestNotCompleteReasonField.setValue('Test Description');
        }

        await this.estimatedDamageValue.selectByVisibleText('$101-$500');
        console.log('Selected estimated damage value');

        await this.witnessInformation();
        await captureScreenshot('Witness Information Entered'); 
        report.addStep('Witness Information Entered Successfully');

        await this.methodOfInjury.scrollIntoView();
        await this.methodOfInjury.selectByVisibleText('Bite');
        console.log('Selected methof of injury');
        await this.natureOfPrimaryInjury.selectByVisibleText('Bite - Other');
        console.log('Selected natur of primary injury');
        await this.primaryBodyPartEffected.selectByVisibleText('Arm - Left Lower');
        console.log('Selected Primary Body Part effected');
        await this.injuryNotes.setValue('Test description notes');
        console.log('Entered Injury Notes');
        await this.typeOfTreatment.selectByVisibleText('First Aid');
        console.log('Selected Type of Treatment');

        await captureScreenshot('Medical Information Entered'); 
        report.addStep('Medical Information Entered Successfully');

        await this.saveIncidentButton.click();
        await elemLoad();
        await this.doneIncidentButton.click();
        await elemLoad();
        await browser.waitUntil(() => this.incidentIdField.isDisplayed());
        await elemLoad();
        const incidentId=await this.incidentIdField.getValue();
        console.log('Print incident id: '+incidentId);
        await captureScreenshot('Incident ID '+incidentId)
        report.addStep('Incident ID '+incidentId);

        await this.saveAndCloseButton.click();
        await this.doneIncidentButton.click();
    }

    async selectFromSearchDropdown(val,elem){
        //await elemLoad();
        //await elem.scrollIntoView();
        await elem.click();
        await elemLoad();
        await this.DropDown_SearchField.setValue(val);
        await elemLoadMed();
        // const searchResultELem=await this.resultsFromSearch;
        // await searchResultELem.waitUntil(() => searchResultELem.isDisplayed);
        // await elemLoadLow();
        await this.resultsFromSearch.click();
        //await elemLoad();
    }


    async teammateInformation(){
        //await this.addTeammateBtn.scrollIntoView();
        await this.addTeammateBtn.click();
        await elemLoad();
        await this.selectFromSearchDropdown('Aldrich, Frank',this.selectTeammateField);
        await elemLoad();
        await this.noOfHrsWorked.selectByVisibleText('1 to 4 Hours');
        await this.saveButton_TeamMate.click();
        await elemLoad();
    }

    async witnessInformation(){
        //await this.addWitnessStmtBtn.scrollIntoView();
        await this.addWitnessStmtBtn.click();
        await elemLoad();
        await this.selectFromSearchDropdown('Aldrich, Frank',this.selectWitnessField);
        await elemLoad();
        await this.witnessStatementField.setValue('Test');
        await this.saveButton_Witness.click();
        await elemLoad();
    }

    async nonNucorInformation(){
        await this.contracterNameField.setValue('ContracterName');
        await this.contracterJobField.setValue('ContracterJob');
        await this.arrivalDateField_NonNucor.setValue('09/23/2023');
        await this.arrivalTimeHr_NonNucor.selectByVisibleText('1');
        await this.arrivalTimeMin_NonNucor.selectByVisibleText('05');
        await this.arrivalTimeAmPm_NonNucor.selectByVisibleText('AM');
        await this.selectFromSearchDropdown('ADAMS COOLING TOWER CONST',this.companyName_NonNucor);
        await this.elemLoadHigh();
    }

    async elemLoadHigh(){
        await browser.pause(5000);
    }

}

module.exports=new Nucor_NewIncidentPage;