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
        var newScope = $rootScope.$new();
        newScope.$context={data:{},behavior:{}};
        $controller('jsonStep1Controller', {$scope:newScope});
        expect(newScope.jsonStep1Ctrl).toBeDefined();
    }));

    it('step 2 test watch', inject(function ($rootScope) {
        var newScope = $rootScope.$new();
        newScope.$context={data:{jsonStepData:[{}],stepData:[{}]},behavior:{}};
        $controller('step2Controller', {$scope:newScope});

        newScope.$context.behavior.leaving({},function(){});
        newScope.$context.behavior.entering({},function(){});
        expect(newScope.$context.data.canSendNotification).toBe(false);
    }));
});