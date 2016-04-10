/**
 * Created by mojtaba on 4/2/16.
 */
/*global describe it expect beforeEach inject */
describe('notification steps : ', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('step 1 controller test working', inject(function ($rootScope) {
        var $scope = $rootScope.$new();
        $scope.$context={data:1,behavior:{}};
        $controller('step1Controller', {$scope:$scope});

        $scope.$context.behavior.leaving({},function(){});
        $scope.$context.behavior.entering({},function(){});

        expect($scope.step1Ctrl).toBeDefined(true);
    }));
});