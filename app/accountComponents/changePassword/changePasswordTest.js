/**
 * Created by mojtaba on 3/17/16.
 */
/*global describe it expect beforeEach inject */
describe('change password controller : ', function() {
    beforeEach(module('app'));
    var controller;
    beforeEach(inject(function(_$controller_,$rootScope){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        var scope=$rootScope.$new();
        controller = _$controller_('changePasswordController', {'$scope':scope});
    }));

    it('controller is defined', function () {
        expect(controller.data.old_password).toBeDefined();
    });

    // describe('test submit preventers', function () {
    //     it("test repassword preventer",function(){
    //         controller.data={
    //             old_password:"123",
    //             password:"123"
    //         };
    //         controller.repassword = "1233";
    //         controller.sendChangeRequest();
    //         expect(controller.error.length > 0).toEqual(true);
    //     });
    // });
    // it('test submit', inject(function (_$q_,$timeout) {
    //     controller.data={
    //         old_password:"124",
    //         password:"123"
    //     };
    //     controller.repassword="123";
    //     var valueToVerify=0;
    //     var deferred = _$q_.defer();
    //     deferred.promise.then(function (data) {valueToVerify = data; });
    //     controller.sendChangeRequest().then(function(){
    //         //deferred.resolve(controller.loginError.length>0);
    //         deferred.resolve(controller.alert.length>0 || controller.error.length>0);
    //     });
    //     //deferred.reject('There has been an Error!'+err);
    //     $timeout.flush();
    //     expect(valueToVerify).toEqual(true);
    // }));
});