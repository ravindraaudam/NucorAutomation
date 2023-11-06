module.exports = class Nucor_NewIncidentPageLocators{
    get nonNucorRadioButton(){
        return $('//*[@id="divNonNucorRadio"]/div[2]/label[2]/span[2]');
    }
    get driverRadioButton(){
        return $('//*[@id="divNonNucorRadio"]/div[2]/label[3]/span[2]');
    }
    get nucorRadioButton(){
        return $('//*[@id="divNonNucorRadio"]/div[2]/label[1]/span[2]');
    }
    get recordable_Yes(){
        return $('//*[@id="divIncRecordable"]/div[2]/label[1]');
    }
    get recordable_No(){
        return $('//*[@id="divIncRecordable"]/div[2]/label[2]');
    }
    get serious_Yes(){
        return $('//*[@id="divIncSIF"]/div[2]/label[1]/span');
    }
    get serious_No(){
        return $('//*[@id="divIncSIF"]/div[2]/label[2]/span');
    }
    get preJobDiscussion_Yes(){
        return $('//*[@id="divIncPreJobDiscussion"]/div[2]/label[1]/span');
    }
    get preJobDiscussion_No(){
        return $('//*[@id="divIncPreJobDiscussion"]/div[2]/label[2]/span');
    }
    get take5_Yes(){
        return $('//*[@id="divIncTake5"]/div[2]/label[1]/span');
    }
    get take5_No(){
        return $('//*[@id="divIncTake5"]/div[2]/label[2]/span');
    }
    get jsaTask_Yes(){
        return $('//*[@id="divJSAQuestions"]/div[2]/label[1]/span');
    }
    get jsaTask_No(){
        return $('//*[@id="divJSAQuestions"]/div[2]/label[2]/span');
    }
    get changeExistingJSA_Yes(){
        return $('//*[@id="divJSAQuestion1"]/div[2]/label[1]/span');
    }
    get changeExistingJSA_No(){
        return $('//*[@id="divJSAQuestion1"]/div[2]/label[2]/span');
    }
    get incidentTypeDropDown(){
        return $('//*[@id="cmbIncType"]');
    }
    get incidentTypeDropDown_New(){
        return $('//*[@id="divIncType"]/div[2]/span[1]/span[1]/span');
    }
    get incidentTypeDropDown_SearchField(){
        return $('/html/body/span/span/span[1]/input');
    }

    get incidentTypeResults(){
        return $('//*[@id="select2-cmbIncType-results"]/li');
    }

    get categoryDropDown(){
        return $('//*[@id="cmbIncCategory"]');
    }
    get DropDown_SearchField(){
        return $('/html/body/span/span/span[1]/input');
    }
    get dateOfIncident(){
        return $('//*[@id="dtIncDate"]/input');
    }
    get timeofIncident_Hr(){
        return $('//*[@id="cmbIncHour"]');
    }
    get timeofIncident_Min(){
        return $('//*[@id="cmbIncMin"]');
    }
    get timeofIncident_AmPm(){
        return $('//*[@id="cmbIncTimeType"]');
    }
    get nucorShift(){
        return $('//*[@id="cmbIncShift"]');
    }
    get nucorCrew(){
        return $('//*[@id="cmbIncCrew"]');
    }
    get incidentReportedDate(){
        return $('//*[@id="dtIncReported"]/input');
    }
    get incidentOccurredMill(){
        return $('//*[@id="cmbIncMill"]');
    }
    get incidentOccurredMill_New(){
        return $('//*[@id="divIncidentMill"]/div[2]/div/span/span[1]/span')
    }
    get incidentOccurredMillResults(){
        return $('//*[@id="select2-cmbIncMill-results"]/li');
    }

    get incidentOccurredArea(){
        return $('//*[@id="cmbIncArea"]');
    }
    get incidentOccurredSupervisor(){
        return $('//*[@id="cmbIncAreaSup"]');
    }
    get incidentOccurredSupervisor_New(){
        return $('//*[@id="divIncidentSupervisor"]/div[2]/div/span/span[1]/span');
    }
    get incidentOccurredSupervisorResults(){
        return $('//*[@id="select2-cmbIncAreaSup-results"]/li');
    }

    get incidentSubject(){
        return $('//*[@id="txtIncSubject"]');
    }
    get incidentDetailsDescription(){
        return $('//*[@id="divIncDetailDesc"]/div[2]/div/div/div[2]/div');
    }
    get incidentCorrectiveAction(){
        return $('//*[@id="divIncidentShortTerm"]/div[2]/div/div/div[2]/div');
    }
    get drugScreenHour(){
        return $('//*[@id="cmbIncDrugHour"]');
    }
    get drugScreenMin(){
        return $('//*[@id="cmbIncDrugMin"]');
    }
    get drugScreenAmPm(){
        return $('//*[@id="cmbIncDrugTimeType"]');
    }
    get estimatedDamageValue(){
        return $('//*[@id="cmbIncEstimateValue"]');
    }
    get methodOfInjury(){
        return $('//*[@id="cmbIncMedInjuryMethod"]');
    }
    get natureOfPrimaryInjury(){
        return $('//*[@id="cmbIncMedNaturePrimaryInjury"]');
    }
    get primaryBodyPartEffected(){
        return $('//*[@id="cmbIncMedPrimaryBody"]');
    }
    get injuryNotes(){
        return $('//*[@id="divInjuryNotes"]/div[2]/div/div[2]/div');
    }
    get typeOfTreatment(){
        return $('//*[@id="cmbIncMedTreatmentType"]');
    }

    get addTeammateBtn(){
        return $('//*[@id="btnIncAddTeamMate"]');
    }

    get selectTeammateField(){
        return $('//*[@id="modalTeamMate"]/div/div/div[2]/div[1]/div[2]/span/span[1]/span');
    }

    get selectTeammateFieldResults(){
        return $('//*[@id="select2-cmbIncTMTeam-results"]/li');
    }

    get noOfHrsWorked(){
        return $('//*[@id="cmbIncTMHours"]');
    }

    get saveButton_TeamMate(){
        return $('//*[@id="btnconfirmdoneIncTeam"]');
    }

    get addWitnessStmtBtn(){
        return $('//*[@id="btnNewWitnessStatement"]');
    }

    get selectWitnessField(){
        return $('//*[@id="nucorWitness"]/div/fieldset/span/span[1]/span');
    }

    get selectWitnessFieldResults(){
        return $('//*[@id="select2-cmbIncWitness-results"]/li');
    }

    get witnessStatementField(){
        return $('//*[@id="divIncidentWitnessStatement"]/div[2]/div/div[2]/div');
    }

    get saveButton_Witness(){
        return $('//*[@id="btnWitAttachmentDone"]');
    }

    get incidentIdField(){
        return $('//*[@id="txtIncidentId"]');
    }

    get resultsFromSearch(){
        return $('/html/body/span/span/span[2]');
    }

    get saveIncidentButton(){
        return $('//*[@id="btnIncSave"]');
    }

    get doneIncidentButton(){
        return $('//*[@id="modalInformation"]/div/div/div[3]/button');
    }

    get contracterNameField(){
        return $('//*[@id="txtIncNonNcrContName"]');
    }

    get contracterJobField(){
        return $('//*[@id="txtIncNonNcrJobTitle"]');
    }

    get arrivalDateField_NonNucor(){
        return $('//*[@id="dtIncNonNcrTimeArv"]/input');
    }

    get arrivalTimeHr_NonNucor(){
        return $('//*[@id="cmbArriveHour"]');
    }

    get arrivalTimeMin_NonNucor(){
        return $('//*[@id="cmbArriveMin"]');
    }

    get arrivalTimeAmPm_NonNucor(){
        return $('//*[@id="cmbArriveTimeType"]');
    }

    get companyName_NonNucor(){
        return $('//*[@id="divIncidentCompanyName"]/div[2]/span/span[1]/span');
    }

    get saveAndCloseButton(){
        return $('//*[@id="btnIncSaveClose"]');
    }

    get drugTestNotCompleteReasonField(){
        return $('//*[@id="txtIncDrugTestReason"]');
    }

}