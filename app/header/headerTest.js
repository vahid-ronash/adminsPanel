/**
 * Created by mojtaba on 3/13/16.
 */
describe('test userMenu directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($compile, $rootScope) {
        var elm = angular.element('<header></header>');
        $compile(elm)($rootScope);
    }));
});