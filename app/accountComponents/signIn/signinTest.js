/**
 * Created by mojtaba on 3/12/16.
 */
/*global describe it expect beforeEach inject */
describe('sign in controller : ', function() {
    beforeEach(module('app'));
    var controller;
    beforeEach(inject(function(_$controller_,$rootScope){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        var scope=$rootScope.$new();
        controller = _$controller_('signInController', { "$scope": scope});
    }));

    it('controller is defined', function () {
        expect(controller.data.email).toBeDefined(true);
    });

    it('check login as demo button', function () {
        controller.loginAsDemo();
        expect(controller.data.email.length>0).toEqual(true);
    });
    var _q,_timeout;
    beforeEach(inject(function(_$q_,$timeout){
        _q=_$q_;
        _timeout=$timeout;
    }));
    it('wrong login test', inject(function () {
        controller.data={
            email:"not_existed_user_email",
            password:"a wrong password",
            rememberMe:true
        };
        var valueToVerify=true;//TODO:equal it to 0 and do that again
        var deferred = _q.defer();
        deferred.promise.then(function (data) {valueToVerify = data; });
        controller.login().then(function(){
            deferred.resolve(controller.loginError.err.length>0);
        });
        //deferred.reject('There has been an Error!'+err);
        _timeout.flush();
        expect(valueToVerify).toEqual(true);
    }));
    it('test login as demo', inject(function (AuthService) {
        var valueToVerify=0;
        var deferred = _q.defer();
        deferred.promise.then(function (data) {valueToVerify = data; });
        controller.loginAsDemo();
        controller.login().then(function(){
            deferred.resolve(AuthService.isAuthenticated());
        });
        _timeout.flush();
        expect(valueToVerify).toEqual(true);
    }));
});