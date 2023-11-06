module.exports = class Nucor_LoginPageLocators{
    get username(){
        return $('//*[@id="i0116"]')
    }

    get nextButton(){
        return $('//*[@id="idSIButton9"]');
    }

    get password(){
        return $('//*[@id="i0118"]');
    }

    get signInButton(){
        return $('//*[@id="idSIButton9"]')
    }

    get textOTPOption(){
        return $('//*[@id="idDiv_SAOTCS_Proofs"]/div[1]/div');
    }
}