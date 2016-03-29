/**
 * Created by mojtaba on 3/29/16.
 */
/*global describe it expect beforeEach inject angular */
describe('test notification-action directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($compile,$rootScope) {
        var elm = angular.element('<notification-action></notification-action>');
        $compile(elm)($rootScope);
    }));
});