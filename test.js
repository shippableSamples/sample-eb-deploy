var superagent = require("superagent"),
    chai = require("chai"),
    expect = chai.expect,
    should = require("should");

describe("Index", function () {
  it("renders HTML", function (done) {
    superagent.get("http://localhost:3000/")
      .end(function (e, res) {
        (e === null).should.equal(true);
        res.text.should.equal('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>Sample NodeJS App</title>\n    <link rel="stylesheet" href="public/resources/css/bootstrap.min.css" />\n    <link rel="stylesheet" href="app.css" />\n  </head>\n  <body>\n    <nav class="navbar navbar-inverse navbar-fixed-top">\n      <div class="container">\n        <div class="navbar-header">\n          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n          </button>\n          <a class="navbar-brand" href="https://app.shippable.com" target="_blank">Shippable</a>\n        </div>\n        <div id="navbar" class="collapse navbar-collapse">\n          <ul class="nav navbar-nav">\n            <li class="active"><a href="http://docs.shippable.com" target="_blank">docs</a></li>\n            <li><a href="http://blog.shippable.com" target="_blank">blog</a></li>\n            <li><a href="https://github.com/shippableSamples/sample_node_eb_paas" target="_blank">source code</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n\n    <main class="bs-docs-masthead" id="content" role="main" tabindex="-1">\n      <div class="container">\n        <img src="public/resources/images/captain.png" alt="aye-aye">\n        <h2>Congratulations Captain!</h2>\n        <h3>You have sucessfully deployed this NodeJS test app to Elastic BeanStalk</h3>\n      </div>\n    </main>\n\n    <!-- Bootstrap core JavaScript\n   ================================================== -->\n   <!-- Placed at the end of the document so the pages load faster -->\n   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>\n   <script src="public/resources/js/bootstrap.min.js"></script>\n  </body>\n</html>\n');
        done();
      });
  });
});
