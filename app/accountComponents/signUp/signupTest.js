/**
 * Created by mojtaba on 3/12/16.
 */
/*global describe it expect beforeEach inject */
describe('sign up controller : ', function() {
    beforeEach(module('app'));
    var controller;
    beforeEach(inject(function(_$controller_,$rootScope){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        var scope=$rootScope.$new();
        controller = _$controller_('signUpController', { "$scope": scope});
    }));

    it('controller is defined', function () {
        expect(controller.data.email).toBeDefined(true);
    });


    describe('test submit preventers', function () {
        beforeEach(function(){
            controller.data = {
                email: "demo@pushe.co",
                password: "1235"
            };
        });
        it("test repassword preventer",function(){
            controller.repassword = "1233";
            controller.register();
            expect(controller.registerError.err.length > 0).toEqual(true);
        });

        it("test agree preventer",function(){
            controller.registerError.err="";//reset error reporter
            controller.repassword = "1235";
            controller.register();
            expect(controller.registerError.err.indexOf("agree") > 0).toEqual(true);
        });
        
        it('submit respond error when user exist', inject(function (_$q_,$timeout) {
            controller.repassword="1235";
            controller.agreement=true;
            var valueToVerify=true;//TODO: it should be 0
            var deferred = _$q_.defer();
            deferred.promise.then(function (data) {valueToVerify = data; });
            var registerPromise=controller.register();
            if(registerPromise)
                registerPromise.then(function(){
                    deferred.resolve(controller.registerError.err.length || controller.registerAlert.err.length);
                });
            else{
                deferred.reject('register is not a promise!'+err);
            }

            $timeout.flush();
            expect(valueToVerify).toEqual(true);
        }));
        
        it('test submit', inject(function (_$q_,$timeout) {
            controller.data.email="successTest"+Math.floor(Math.random()*1000)+"@ui.co";
            controller.repassword="1235";
            controller.agreement=true;
            controller.registerError.err=0;
            var valueToVerify=0;
            var deferred = _$q_.defer();
            deferred.promise.then(function (data) {valueToVerify = data; });
            controller.register().then(function(){
                deferred.resolve(!controller.registerError.err || !controller.registerError.err.length );
            });
            //deferred.reject('There has been an Error!'+err);
            $timeout.flush();
            expect(valueToVerify).toEqual(true);
        }));
    });
});