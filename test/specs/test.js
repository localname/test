//



// describe('my awesome website', function() {
//     it('should do some chai assertions', (done) => {
//         browser.url('http://webdriver.io');
//          browser.title((err, res) => {
//            var title = res.value;
//            console.log('title', title)
//            expect(title).to.be('google');
//            done();
//          })
//          .end();
//          })
//     });
'use strict';

describe ('Website url test', () => {
  browser.url('http://webdriver.io');

  it('should have a title webdriver...', () => {
    var title = browser.getTitle();
    expect(title).to.be.equal('WebdriverIO - WebDriver bindings for Node.js')
  });

  it('should include webdriver', () => {
    return browser.getText('*=Webdriver')
  });

  it('should response 200', () => {
    browser.click('a[href*="guide.html"]');
    let url = browser.getUrl();
    expect(url).to.be.equal('http://webdriver.io/guide.html')
  })

  // it('opens the hamburger', () => {
  //   browser.click('button.navbar-toggle');
  //   console.log('asd')
  // })
})
