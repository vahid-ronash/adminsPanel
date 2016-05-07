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

    it('step 7 controller test working', inject(function ($rootScope) {
        var newScope = $rootScope.$new();
        newScope.wizard={steps:{}};
        var controller=$controller('step7Controller', {$scope:newScope});
        expect(controller).toBeDefined(true);
    }));

    it('is IMEI test', inject(function ($rootScope) {
        var $scope = $rootScope.$new();
        $scope.wizard={steps:{}};
        var controller=$controller('step7Controller', {$scope:$scope});
        expect(controller.isIMEI({text:"3213211"})).toBe(false);
        expect(controller.isIMEI({text:"165216516514621"})).toBe(false);
        expect(controller.isIMEI({text:"359492064832138"})).toBe(true);
    }));
});