////////////////////////////////////////////////////////////////
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide
//
// For more information on working with page objects see:
//   https://nightwatchjs.org/guide/working-with-page-objects/
////////////////////////////////////////////////////////////////

module.exports = {
  beforeEach: (browser) => {browser.init(),browser.fullscreenWindow()},

  'Test Case 1:Automated student form': (browser) => {
    const homepage = browser.page.homepage()
    homepage.selectStudentForm('@studentFormBtn')
        .verify.visible('@name')
        .setValue('@name','jack')
        .verify.visible('@gender') 
        .click('@gender')
        .pause(1000)
        .verify.visible('@dob')
        .setValue('@dob','3131998')
        .pause(1000)
        .verify.visible('@studentImg')
        .assert.attributeContains('@studentImg', 'type', 'file')
        .setValue('@studentImg','/Users/anujdeep/Downloads/scooby.jpeg')
        .pause(2000)
        .verify.visible('@qualification')
        .click('@qualification')
        .waitForElementVisible('@bcom')
        .pause(2000)
        .verify.visible('@selectQualification')
        .click('@selectQualification')
        .pause(2000)
        .verify.visible('@contact')
        .clearValue('@contact')
        .setValue('@contact','5341312312')
        .verify.visible('@selectSchoolId')
        .click('@selectSchoolId')
        .pause(2000)
        .verify.visible('@submitBtn')
        .click('@submitBtn')
        .pause(3000)
        .saveScreenshot("tests/screenshots/" + "student1.png")
        
        
      },
     'Test Case 2:Automated school form': (browser) => {
          browser.customSchoolOps();
    
      },
      'Test Case 3:Incomplete student form data':(browser)=>{
        const homepage = browser.page.homepage()
        homepage.selectStudentForm('@studentFormBtn')
        .verify.visible('@name')
        .setValue('@name','jack') 
        .pause(1000)
        .verify.visible('@dob')
        .setValue('@dob','3131998')
        .pause(1000)
        .verify.visible('@qualification')
        .click('@qualification')
        .waitForElementVisible('@bcom')
        .pause(2000)
        .verify.visible('@selectQualification')
        .click('@selectQualification')
        .pause(2000)
        .verify.visible('@selectSchoolId')
        .click('@selectSchoolId')
        .pause(2000)
        .verify.visible('@submitBtn')
        .click('@submitBtn')
        .saveScreenshot("tests/screenshots/" + "student2.png")
        .pause(3000)
      },
      'Test Case 4:Edit Student Data':(browser)=>{
        browser.customSchoolOps();
        const homepage = browser.page.homepage()
        homepage.selectStudentForm('@studentFormBtn')
        .verify.visible('@editStudent')
        .click('@editStudent')
        .pause(2000)
        .verify.visible('@name')
        .clearValue('@name')
        .setValue('@name','ronaldo') 
        .pause(1000)
        .verify.visible('@dob')
        .setValue('@dob','3131996')
        .pause(1000)
        .verify.visible('@studentImg')
        .assert.attributeContains('@studentImg', 'type', 'file')
        .setValue('@studentImg','/Users/anujdeep/Downloads/pokemon.jpeg')
        .pause(2000)
        .verify.visible('@qualification')
        .click('@qualification')
        .waitForElementVisible('@bcom')
        .pause(2000)
        .verify.visible('@selectQualification')
        .click('@selectQualification')
        .pause(2000)
        .verify.visible('@selectSchoolId')
        .click('@selectSchoolId')
        .pause(2000)
        .verify.visible('@submitBtn')
        .click('@submitBtn')
        .pause(3000)
        .saveScreenshot("tests/screenshots/" + "student3.png")
        
      },
      
  
}
