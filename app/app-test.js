/**
 * Created by mojtaba on 3/8/16.
 */
/*global describe beforeEach inject it expect */
describe('test app Controller', function() {
    beforeEach(module('app'));
    var $controller,gscope;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        gscope ={$watch:{}};
        $controller('AppCtrl', { $scope: gscope });
    }));

    it('methods are defined well', function () {
        expect(typeof gscope.isIE()).toEqual('boolean');
    });
    //TODO: it will work in a real respond not with mock
    //it('prevent by sign in', inject(function ($route,$rootScope,Session,$location,$timeout) {
    //    Session.destroy();
    //    $location.path("/apps");
    //    var path=$location.path();
    //    expect(path).toEqual('/apps');
    //    try {
    //        gscope.$apply();
    //    }
    //    catch(e){
    //
    //    }
    //    // Flush the timeout service
    //    $timeout.flush(2000);
    //    // the actions within the $timeout are executed
    //    expect($location.path()).toEqual('/account/signin');
    //}));
});