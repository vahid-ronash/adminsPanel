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
            expect(controller.registerError.length > 0).toEqual(true);
        });

        it("test agree preventer",function(){
            controller.registerError="";//reset error reporter
            controller.repassword = "1235";
            controller.register();
            expect(controller.registerError.indexOf("agree") > 0).toEqual(true);
        });
        
        it('submit respond error when user exist', inject(function (_$q_,$timeout) {
            controller.repassword="1235";
            controller.agreement=true;
            var valueToVerify=0;
            var deferred = _$q_.defer();
            deferred.promise.then(function (data) {valueToVerify = data; });
            var registerPromise=controller.register();
            if(registerPromise)
                registerPromise.then(function(){
                    deferred.resolve(controller.registerError.length>0);
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
            controller.registerError=0;
            var valueToVerify=0;
            var deferred = _$q_.defer();
            deferred.promise.then(function (data) {valueToVerify = data; });
            controller.register().then(function(){
                deferred.resolve(!controller.registerError || !controller.registerError.length );
            });
            //deferred.reject('There has been an Error!'+err);
            $timeout.flush();
            expect(valueToVerify).toEqual(true);
        }));
    });
});