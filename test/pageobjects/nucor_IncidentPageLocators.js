module.exports = class Nucor_IncidentPageLocators{
    get openIncidentsTable(){
        return $('//*[@id="tblOpenIncidents"]');
    }

    get newIncidentButton(){
        return $('//*[@id="btnNewIncident"]');
    }

}