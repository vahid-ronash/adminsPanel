/**
 * Created by mojtaba on 3/7/16.
 */
//todo:it will run by protractor
/*global describe it expect $ browser element by */
describe('first Test', function() {
    it('first path should be index.html', function() {
        browser.get('../index.html');
        expect(browser.getLocationAbsUrl()).toMatch("index.html");
    });
    it('body has to be one', function () {
        expect(10).toEqual(10);
        expect(element(by.css('body')).count()).toEqual(1);
        expect($('body').length).toEqual(1);
        // Find the element with ng-model="user" and type "jacksparrow" into it
        //element(by.model('user')).sendKeys('jacksparrow');

        // Find the first (and only) button on the page and click it
        //element(by.css(':button')).click();

        // Verify that there are 10 tasks
        //expect(element.all(by.repeater('task in tasks')).count()).toEqual(10);

        // Enter 'groceries' into the element with ng-model="filterText"
        //element(by.model('filterText')).sendKeys('groceries');

        // Verify that now there is only one item in the task list
        //expect(element.all(by.repeater('task in tasks')).count()).toEqual(1);
    });
});