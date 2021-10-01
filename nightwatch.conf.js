module.exports={
  // "src_folders" : ["tests1"],
  // "page_objects_path" : ["page-objects"],
  // "webdriver" : {
  //   "start_process": true,
  //   "server_path": "node_modules/.bin/chromedriver",
  //   "port": 9515
  // },

  "test_settings" : {
    "default" : {
      persist_globals: true,
      custom_commands_path :"tests/e2e/custom-commands",
      // "desiredCapabilities": {
      //   "browserName": "chrome",
      //   "chromeOptions": {
      //     "args": [
      //         "window-size=1400,850"
      //     ]
      //   }
      // }
    }
  }
}