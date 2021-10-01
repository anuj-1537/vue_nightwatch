/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Example usage:
 *   browser.page.homepage.navigate()
 *
 * For more information on working with page objects see:
 *   https://nightwatchjs.org/guide/working-with-page-objects/
 *
 */

module.exports = {
  url: '/',
  commands: [{
    selectStudentForm(selector){
      const page=this;
      page
      .waitForElementVisible(selector)
      .pause(3000)
      .click(selector)
      .pause(1000);
      return page;
    },
    inputValue(selector,value){
      const page=this;
      page
      .clearValue(selector)
      .sendKeys(selector, value)
      .pause(1000)
      return this;
    }
  }],

  // A page object can have elements
  elements: {
        gender:{
          selector:"#male"
        },
        studentFormBtn:{
          selector:'#studentFormButton'
        },
        schoolFormBtn:{
          selector:'#schoolFormButton'
        },
        name:{
          selector:'#name'
        },
        dob:{
          selector:"#dob"
        },
        qualification:{
          selector:"#qualification"
        },
        bcom:{
          selector:'#bcom'
        },
        contact:{
          selector:'#contact'
        },
        submitBtn:{
          selector:'#submitBtn'
        },
        schoolTable:{
          selector:'#schoolTable'
        },
        creditBtn:{
          selector:"#creditButton"
        },
        cardList:{
          selector:".card-list"
        },
        selectQualification:{
          selector:"select[id='qualification'] option[value='B.Com']"
        },
        selectSchoolId:{
          selector:'select[id="school"] option:nth-child(2)'
        },
        editStudent:{
          selector:'#edit-1'
        },
        schoolName:{
          selector:'#schoolName'
        },
        schoolIdDropdown:{
          selector:'#schoolId'
        },
        schoolId:{
          selector:'#schoolId[value="J67W"]'
        },
        address:{
          selector:'#Addr'
        },
        schoolBtn:{
          selector:'#schoolBtn'
        },
        studentImg:{
          selector:"input[type='file']"
        }

  },

  // Or a page objects can also have sections
  sections: {
    app: {
      selector: '#app',

      elements: {
        logo: 'img'
      },

      // - a page object section can also have sub-sections
      // - elements or sub-sections located here are retrieved using the "app" section as the base
      sections: {
        headline: {
          selector: 'h1'
        },

        welcome: {
          // the equivalent css selector for the "welcome" sub-section would be:
          //  '#app div.hello'
          selector: 'div.hello',

          elements: {
            cliPluginLinks: {
              selector: 'ul',
              index: 0
            }
          }
        }
      }
    }
  }
}

// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

// module.exports = {
//   'default e2e tests': browser => {
//     browser
//       .init()
//       .waitForElementVisible('#app')
//       .assert.elementPresent('.hello')
//       .assert.containsText('h1', 'Welcome to Your Vue.js App')
//       .assert.elementCount('img', 1)
//       .end()
//   },

//   'example e2e test using a custom command': browser => {
//     browser
//       .openHomepage()
//       .assert.elementPresent('.hello')
//       .end()
//   }
// }
