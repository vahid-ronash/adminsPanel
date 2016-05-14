/**
 * Created by mojtaba on 3/14/16.
 */
/*global describe it expect beforeEach inject angular */
describe('test notification table directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($compile,$rootScope) {
        var elm = angular.element('<notification-table></notification-table>');
        $compile(elm)($rootScope);
    }));
});

describe('test notification controller and services : ', function () {
    //module.sharedInjector(); //TODO:we could use it in angular 1.5.1 and use beforeAll instead of all next beforeEach
    beforeEach(module("app"));//beforeAll(module("app"));
    var notificationTableController, $timeout, deferred;

    //inject what we need in next specs
    beforeEach(//beforeAll(
        inject(function (_$q_, _$timeout_, _$controller_, notificationResource) {
            deferred = _$q_.defer();
            $timeout = _$timeout_;
            notificationTableController = _$controller_('notificationTableController', {
                "$scope": {},
                "notificationResource": notificationResource
            });
        })
    );

    //make promises for each spec
    beforeEach(function () {
        var thisSpec = this;
        thisSpec.valueToVerify = 0;
        deferred.promise.then(function (data) {
            thisSpec.valueToVerify = data;
        });
    });

    // it("test notificationResource with page",function () {
    //     notificationTableController.callServer({
    //         pagination:{
    //             start:1,number:10
    //         },
    //         search:{
    //             predicateObject:{
    //                 application:'b4'
    //             }
    //         },
    //         sort:{
    //             predicate:'title',
    //             reverse:false
    //         }
    //     }).then(function(){
    //         deferred.resolve(notificationTableController.displayed.length>0);
    //     });
    //     $timeout.flush();
    //     expect(this.valueToVerify).toEqual(true);
    // });
});