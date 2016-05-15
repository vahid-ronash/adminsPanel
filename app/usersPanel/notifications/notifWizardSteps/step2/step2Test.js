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
        $scope.wizard={steps:{}};
        var controller=$controller('step2Controller', {$scope:$scope});
        expect(controller).toBeDefined(true);
    }));

    it('step 2 test watch', inject(function ($rootScope) {
        var $scope = $rootScope.$new();
        $scope.wizard={steps:{},canSendNotification:false};
        var controller=$controller('step2Controller', {$scope:$scope});

        expect(controller.data.title.length).toEqual(0);
        controller.data.content="sdcr";
        controller.dataChange();
        expect($scope.wizard.canSendNotification).toBe(false);
        controller.data.title="asdasd";
        controller.dataChange();
        expect($scope.wizard.canSendNotification).toBe(true);
    }));
});