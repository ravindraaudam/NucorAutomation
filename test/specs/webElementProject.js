const Nucor_HomePage = require('../pages/nucor_HomePage')
const MiscFunctions = require('../pages/miscFunctions')
const Nucor_IncidentPage = require('../pages/nucor_IncidentPage')
const Nucor_MenuPage = require('../pages/nucor_MenuPage')
const Nucor_NewIncidentPage = require('../pages/nucor_NewIncidentPage')
const Nucor_LoginPage=require('../pages/nucor_LoginPage')

const { assert } = require('chai')
const { brwSyncHigh, captureScreenshot } = require('../pages/miscFunctions')
const { validateHomePage } = require('../pages/nucor_HomePage')
const { remote } = require('webdriverio');
const d = new Date();

import report, { addSeverity } from "@wdio/allure-reporter";

describe('Automation POC for Nucor Application', () => {

  it('To check whether user is navigated to correct URL', async () => {
    addSeverity('Normal');
    await Nucor_LoginPage.openUrl();
    await Nucor_LoginPage.loginToApplication();
    await Nucor_HomePage.validateHomePage();
    console.log('User is navigated to homepage successfully');
    await MiscFunctions.captureScreenshot('User navigated to correct URL and homepage');
    report.addStep('User navigated to correct URL and homepage')
  }).timeout(240000);

  it('To check if Incidents page is loaded successfully', async () => {
    
    addSeverity('Critical');
    await Nucor_LoginPage.openUrl();
    await MiscFunctions.brwSyncLow();
    await Nucor_HomePage.navigateToMenu();
    await MiscFunctions.brwSyncLow();
    await Nucor_MenuPage.navigateToIncidents();
    await Nucor_IncidentPage.validateIncidentPage();
    console.log('Incident table is loaded successfully');
    await MiscFunctions.captureScreenshot('Incident table loaded successfully');
    report.addStep('Incident table displayed successfully')
  }).timeout(240000);

  it('To create new incident with Nucor employee and capture incident number', async () => {
    // await Nucor_HomePage.navigateToMenu();
    // await Nucor_MenuPage.navigateToIncidents();
    // await Nucor_IncidentPage.validateIncidentPage();
    addSeverity('Critical');
    await Nucor_IncidentPage.navigateToNewIncidentPage();
    await Nucor_NewIncidentPage.createNucorIncident('Nucor');
  }).timeout(240000);

  it('To create new incident with Non-Nucor employee and capture incident number', async () => {
    // await Nucor_HomePage.navigateToMenu();
    // await Nucor_MenuPage.navigateToIncidents();
    // await Nucor_IncidentPage.validateIncidentPage();
    addSeverity('Critical');
    await Nucor_IncidentPage.navigateToNewIncidentPage();
    await Nucor_NewIncidentPage.createNucorIncident('NonNucor');
  }).timeout(240000);

})