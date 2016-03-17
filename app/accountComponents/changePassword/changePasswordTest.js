/**
 * Created by mojtaba on 3/17/16.
 */
/*global describe it expect beforeEach inject */
describe('change password controller : ', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('controller is defined', function () {
        var controller = $controller('changePasswordController', { "$scope": {app:{name:"adminsPanel"}} });
        expect(controller.app.name.length>0).toEqual(true);
    });

    describe('test submit preventers', function () {
        it("test repassword preventer",function(){
            var controller = $controller('changePasswordController', { "$scope": {app:{name:"adminsPanel"}} });
            controller.data={
                currentPassword:"123",
                newPassword:"123"
            };
            controller.repassword = "1233";
            controller.sendChangeRequest();
            expect(controller.error.length > 0).toEqual(true);
        });
    });
    it('test submit', inject(function (_$q_,$timeout) {
        var controller = $controller('changePasswordController', { "$scope": {app:{name:"adminsPanel"}} });
        controller.data={
            currentPassword:"124",
            newPassword:"123"
        };
        controller.repassword="124";
        var valueToVerify=0;
        var deferred = _$q_.defer();
        deferred.promise.then(function (data) {valueToVerify = data; });
        controller.sendChangeRequest().then(function(){
            //deferred.resolve(controller.loginError.length>0);
            deferred.resolve(controller.alert.length>0);
        });
        //deferred.reject('There has been an Error!'+err);
        $timeout.flush();
        expect(valueToVerify).toEqual(true);
    }));
});