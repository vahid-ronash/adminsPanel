/**
 * Created by mojtaba on 4/2/16.
 */
/*global describe it expect beforeEach inject */
describe('json notification : ', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('controller test working', inject(function ($rootScope) {
        var newScope = $rootScope.$new();
        newScope.$context={data:{},behavior:{}};
        $controller('jsonStep1Controller', {$scope:newScope});
        expect(newScope.jsonStep1Ctrl).toBeDefined();
    }));
});