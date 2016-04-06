/**
 * Created by mojtaba on 3/12/16.
 */
/*global describe it expect beforeEach inject */
describe('sign in controller : ', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('controller is defined', function () {
        var controller = $controller('signInController', { "$scope": {app:{name:"adminsPanel"}} });
        expect(controller.app.name.length>0).toEqual(true);
    });
    it('check login as demo button', function () {
        var controller = $controller('signInController', {"$scope": {app: {name: "adminsPanel"}}});
        controller.loginAsDemo();
        expect(controller.credential.email.length>0).toEqual(true);
    });
    var _q,_timeout;
    beforeEach(inject(function(_$q_,$timeout){
        _q=_$q_;
        _timeout=$timeout;
    }));
    it('wrong login test', inject(function () {
        var controller = $controller('signInController', { "$scope": {app:{name:"adminsPanel"}} });
        controller.credential={
            email:"demo@pushe.co",
            password:"1235",
            rememberMe:true
        };
        var valueToVerify=0;
        var deferred = _q.defer();
        deferred.promise.then(function (data) {valueToVerify = data; });
        controller.login().then(function(){
            deferred.resolve(controller.loginError.length>0);
        });
        //deferred.reject('There has been an Error!'+err);
        _timeout.flush();
        expect(valueToVerify).toEqual(true);
    }));
    it('test login as demo', inject(function (AuthService) {
        var controller = $controller('signInController', {"$scope": {app: {name: "adminsPanel"}}});
        var valueToVerify=0;
        var deferred = _q.defer();
        deferred.promise.then(function (data) {valueToVerify = data; });
        controller.loginAsDemo().then(function(){
            deferred.resolve(AuthService.isAuthenticated());
        });
        _timeout.flush();
        expect(valueToVerify).toEqual(true);
    }));
});