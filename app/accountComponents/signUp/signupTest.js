/**
 * Created by mojtaba on 3/12/16.
 */
/*global describe it expect beforeEach inject */
describe('sign up controller : ', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('controller is defined', function () {
        var controller = $controller('signUpController', { "$scope": {app:{name:"adminsPanel"}} });
        expect(controller.app.name.length>0).toEqual(true);
    });


    describe('test submit preventers', function () {
        var controller;
        beforeEach(function(){
            controller = $controller('signUpController', {"$scope": {app: {name: "adminsPanel"}}});
            controller.user = {
                email: "demo@pushe.co",
                password: "1235",
                agree: false
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
    });
    it('test submit', inject(function (_$q_,$timeout) {
        var controller = $controller('signUpController', {"$scope": {app: {name: "adminsPanel"}}});
        controller.user = {
            email: "demo@pushe.co",
            password: "1235",
            agree: true
        };
        controller.repassword="1235";

        var valueToVerify=0;
        var deferred = _$q_.defer();
        deferred.promise.then(function (data) {valueToVerify = data; });
        controller.register().then(function(){
            deferred.resolve(controller.registerError.length>0);
        });
        //deferred.reject('There has been an Error!'+err);
        $timeout.flush();
        expect(valueToVerify).toEqual(true);
    }));
});