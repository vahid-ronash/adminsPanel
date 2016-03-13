/**
 * Created by mojtaba on 3/8/16.
 */
/*global beforeEach describe it expect AsyncSpec */
describe('test app Controller', function() {
    beforeEach(module('app'));
    var $controller,gscope;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        gscope ={$watch:function(){}};
        $controller('AppCtrl', { $scope: gscope });
    }));

    it('methods are defined well', function () {
        expect(typeof gscope.isIE()).toEqual('boolean');
    //    expect(typeof gscope.isSmart()).toEqual('boolean');
    //
    //    expect(typeof gscope.setTheme).toEqual('function');
    //    expect(typeof gscope.goBack).toEqual('function');
    });
    it('name has to inherit from parent scope', inject(function ($route,$rootScope,Session,$location,$timeout) {
        Session.destroy();
        $location.path("/apps");
        var path=$location.path();
        expect(path).toEqual('/apps');
        try {
            $rootScope.$apply();
        }
        catch(e){

        }
        // Flush the timeout service
        $timeout.flush(100);
        // the actions within the $timeout are executed
        expect($location.path()).toEqual('/account/signin');
    }));
});