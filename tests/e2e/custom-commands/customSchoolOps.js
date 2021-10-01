module.exports=class{
    async command(){
        const school=this.api.page.homepage();
        school
        .selectStudentForm('@studentFormBtn')
        .setValue('@name','hello') 
        .click('@gender')
        .pause(1000)
        .setValue('@dob','3131999')
        .pause(1000)
        .verify.visible('@studentImg')
        .assert.attributeContains('@studentImg', 'type', 'file')
        .setValue('@studentImg','/Users/anujdeep/Downloads/scooby.jpeg')
        .pause(2000)
        .click('@qualification')
        .waitForElementVisible('@bcom')
        .pause(2000)
        .click('@selectQualification')
        .pause(2000)
        .clearValue('@contact')
        .setValue('@contact','9828292873')
        .click('@selectSchoolId')
        .pause(2000)
        .click('@submitBtn')
        .pause(6000)
        .click("@schoolFormBtn")
        .pause(3000)
        .click('button[id="1"]')
        .pause(3000)
        .saveScreenshot("tests/screenshots/" + "school.png")
        .click('@creditBtn')
        .pause(3000)
        .waitForElementVisible("@cardList");
    }
}