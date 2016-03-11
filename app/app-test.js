/**
 * Created by mojtaba on 3/8/16.
 */
/*global describe it expect beforeEach */
describe('test app Controller', function() {
    beforeEach(module('app'));
    var $controller,rootScope;
    beforeEach(inject(function(_$controller_,$rootScope){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        rootScope=$rootScope;
    }));

    var $scope = {$watch:function(){}};


    it('methods are defined well', function () {
        $controller('AppCtrl', { $scope: rootScope });
        expect(typeof $scope.isIE()).toEqual('boolean');
        expect(typeof $scope.isSmart()).toEqual('boolean');

        expect(typeof $scope.setTheme).toEqual('function');
        expect(typeof $scope.goBack).toEqual('function');
    });
    it('name has to inherit from parent scope', function () {
        $controller('AppCtrl', { $scope: rootScope });
        expect($scope.app.name.length>0).toEqual(true);
    });
});