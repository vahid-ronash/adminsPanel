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

    it('step 2 controller test working', inject(function ($rootScope) {
        var $scope = $rootScope.$new();
        $scope.$context={data:{},behavior:{}};
        $controller('step2Controller', {$scope:$scope});
        expect($scope.step2Ctrl).toBeDefined(true);
    }));

    it('step 2 test watch', inject(function ($rootScope) {
        var $scope = $rootScope.$new();
        $scope.$context={data:{},behavior:{}};
        $controller('step2Controller', {$scope:$scope});
        expect($scope.step2Ctrl.data.title.length).toEqual(0);
        $scope.step2Ctrl.data.content="sdcr";
        $scope.step2Ctrl.dataChange();
        expect($scope.$context.data.canSendNotification).toBe(false);
        $scope.step2Ctrl.data.title="asdasd";
        $scope.step2Ctrl.dataChange();
        expect($scope.$context.data.canSendNotification).toBe(true);
    }));
});