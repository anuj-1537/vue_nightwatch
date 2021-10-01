// module.exports={
//     '@tags':['form'],
//     'automate school form':function(browser){
//         const gender='#male'
//         const url="http://localhost:8080/"
//         const studentFormBtn='#studentFormButton'
//         const schoolFormBtn='#schoolFormButton'
//         const name='#name'
//         const dob="#dob"
//         const qualification="#qualification"
//         const bcom='#bcom'
//         const contact='#contact'
//         const submitBtn='#submitBtn'
//         const schoolTable='#schoolTable'
//         const creditBtn="#creditButton"
//         browser
//         .url(url)
//         .waitForElementVisible(studentFormBtn)
//         .pause(1000)
//         .click(studentFormBtn)
//         .pause(1000)
//         .clearValue(name)
//         .sendKeys(name, 'jack')
//         .pause(1000)
//         .click(gender)
//         .pause(1000)
//         .sendKeys(dob,'3131998')
//         .pause(1000)
//         .click(qualification)
//         .waitForElementVisible(bcom)
//         .pause(2000)
//         .click('select[id="qualification"] option[value="B.Com"]')
//         .pause(2000)
//         .clearValue(contact)
//         .sendKeys(contact,'7005022523')
//         .pause(2000)
//         .click('select[id="school"] option:nth-child(2)')
//         .pause(2000)
//         .perform(()=>{console.log("hi anuj");})
//         .click(submitBtn)
//         .pause(3000)
//         .click(schoolFormBtn)
//         .pause(2000)
//         .waitForElementVisible(schoolTable)
//         .click('button[id="1"]')
//         .pause(3000)
//         .verify.visible('#schoolBtn','school button is visible')
//         .click('button[id="edits1"]')
//         .pause(3000)
//         .assert.attributeContains('#Addr', 'name', 'Addr')
//         .assert.containsText("h2", "School Details")
//         .click(creditBtn)
//         .pause(2000)
//         .assert.cssClassPresent("li", "card-list")
//         .assert.cssProperty("li", "display", "inline-flex")
//         .assert.elementPresent("ol")
//         .assert.urlContains('localhost:8080')
//         .assert.urlEquals('http://localhost:8080/cardData')
//         .expect.element('.card-list').to.be.present.before(100);

//         browser.expect.element('li').to.have.css('justify-content').which.contains('space-between');
        
//     }
// }