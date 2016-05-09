/**
 * Created by mojtaba on 3/14/16.
 */
/*global describe it beforeEach inject */
describe('focusDirective directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($compile,$rootScope) {
        var $scope=$rootScope.$new();
        $scope.isFocus1=false;
        $scope.isFocus2=true;
        var elms = angular.element('<div><input focus-me="isFocus1"><input focus-me="isFocus2"></div>');
        // $scope.$digest();
        $compile(elms)($scope);
        $scope.isFocus1=true;
        $scope.$digest();
        expect($scope.isFocus1).toBe(true);
    }));
});