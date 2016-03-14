/**
 * Created by mojtaba on 3/14/16.
 */
describe('test installed table directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($compile,$rootScope) {
        var elm = angular.element('<install-table></install-table>');
        $compile(elm)($rootScope);
    }));
});

describe('test application table controller and services : ', function () {
    //module.sharedInjector(); //TODO:we could use it in angular 1.5.1 and use beforeAll instead of all next beforeEach
    beforeEach(module("app"));//beforeAll(module("app"));
    var installedTableController, $timeout, deferred;

    //inject what we need in next specs
    beforeEach(//beforeAll(
        inject(function (_$q_, _$timeout_, _$controller_, installedResource) {
            deferred = _$q_.defer();
            $timeout = _$timeout_;
            installedTableController = _$controller_('installedTableController', {
                "$scope": {},
                "installedResource": installedResource
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

    it("test installedResource", inject(function (installedResource) {
        //when it respond to below query it has responded to appCollection query
        installedResource.query().then(function (result) {
            deferred.resolve(result.length > 0 && installedTableController.installedCollection.length > 0);
        });
        $timeout.flush();
        expect(this.valueToVerify).toEqual(true);
    }));
    it("test installedResource with page", inject(function (installedResource) {
        //when it respond to below query it has responded to appCollection query
        installedResource.query(1).then(function (result) {
            deferred.resolve(result.length > 0 && installedTableController.installedCollection.length > 0);
        });
        $timeout.flush();
        expect(this.valueToVerify).toEqual(true);
    }));
});