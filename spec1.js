var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

    it('existing customers should have the right title - the fancy generator way', function () {
        browser.url('https://internet.frontier.com/existing-customers.html');
        var title = browser.getTitle();
        assert.equal(title, 'Frontier Customer Service | Call to Upgrade Today!');
    });

});