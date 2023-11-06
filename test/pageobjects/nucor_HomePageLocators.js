module.exports = class Nucor_HomePageLocators{
    get homePageElement(){
        return $('//*[@id="division"]');
    }

    get menuButton(){
        return $('//*[@id="btnNavigator"]');
    }

    get homeButton(){
        return $('//*[@id="homelink"]');
    }
}