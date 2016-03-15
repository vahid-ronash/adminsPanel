/**
 * Created by mojtaba on 3/14/16.
 */
/*global describe it expect beforeEach inject angular */
describe('test installed table directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($compile,$rootScope) {
        var elm = angular.element('<install-table></install-table>');
        $compile(elm)($rootScope);
    }));
});

describe('test installed controller and services : ', function () {
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

    it("test installedResource with page",function () {
        installedTableController.callServer({
            pagination:{
                start:1,number:10
            },
            search:{
                predicateObject:{
                    device:'1',
                    application:'b4'
                }
            },
            sort:{
                predicate:'device',
                reverse:false
            }
        }).then(function(){
            deferred.resolve(installedTableController.displayed.length>0);
        });
        $timeout.flush();
        expect(this.valueToVerify).toEqual(true);
    });
});