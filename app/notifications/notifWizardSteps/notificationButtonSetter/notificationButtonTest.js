/**
 * Created by mojtaba on 3/29/16.
 */
/*global describe it expect beforeEach inject angular */
describe('test notification-button-setter directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($compile,$rootScope) {
        var elm = angular.element('<notification-button-setter></notification-button-setter>');
        $compile(elm)($rootScope);
    }));
});