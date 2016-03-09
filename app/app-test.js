/**
 * Created by mojtaba on 3/8/16.
 */
/*global describe it expect $ */
describe('first Test', function() {
    it('body has to be one', function () {
        expect(10).toEqual(10);
        expect($('body').length).toEqual(1);
    });
});
describe('test app Controller', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    var $scope = {$watch:function(){}};


    it('methods are defined well', function () {
        var controller = $controller('AppCtrl', { $scope: $scope });
        expect(typeof $scope.isIE()).toEqual('boolean');
        expect(typeof $scope.isSmart()).toEqual('boolean');

        expect(typeof $scope.setTheme).toEqual('function');
        expect(typeof $scope.goBack).toEqual('function');
    });
    it('name has to inherit from parent scope', function () {
        var controller = $controller('AppCtrl', { $scope: $scope });
        expect($scope.app.name.length>0).toEqual(true);
    });
});