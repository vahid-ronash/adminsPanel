/**
 * Created by mojtaba on 3/14/16.
 */
/*global describe it beforeEach inject */
describe('focusDirective directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($compile,$rootScope) {
        $rootScope.isFocus=false;
        var elm = angular.element('<input focus-me="$rootScope.isFocus">');
        $compile(elm)($rootScope);
        $rootScope.isFocus=true;
    }));
});