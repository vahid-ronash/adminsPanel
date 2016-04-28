/**
 * Created by mojtaba on 3/12/16.
 */
/*global describe it expect beforeEach inject */
describe('forgot password controller : ', function() {
    beforeEach(module('app'));
    var controller;
    beforeEach(inject(function(_$controller_,$rootScope){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        var scope=$rootScope.$new();
        controller = _$controller_('forgotPasswordController', { "$scope": scope});
    }));

    it('controller is defined', function () {
        expect(controller.data.email).toBeDefined(true);
    });

    it('test submit', inject(function (_$q_,$timeout) {
        controller.request={
            email:"demo@pushe.co"
        };
        var valueToVerify=0;
        var deferred = _$q_.defer();
        deferred.promise.then(function (data) {valueToVerify = data; });
        controller.forgotPassword().then(function(){
            //deferred.resolve(controller.loginError.length>0);
            deferred.resolve(controller.successed);
        });
        //deferred.reject('There has been an Error!'+err);
        $timeout.flush();
        expect(valueToVerify).toEqual(true);
    }));
});