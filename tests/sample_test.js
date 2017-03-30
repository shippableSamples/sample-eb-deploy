module.exports = {
  "test sample" : function (browser) {
    browser
      .url("http://127.0.0.1:3000")
      .waitForElementVisible('body', 1000)
      .assert.title("Sample NodeJS App")
      .assert.containsText('body', "Congratulations Captain!")
      .assert.attributeContains('#main', 'src', 'public/resources/images/captain.png')
      .end();
  }
};
