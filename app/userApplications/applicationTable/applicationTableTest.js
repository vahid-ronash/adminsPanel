/**
 * Created by mojtaba on 3/9/16.
 */
/*global angular describe it expect beforeEach inject */
describe('test application table directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($compile,$rootScope) {
        var elm = angular.element('<application-table></application-table>');
        $compile(elm)($rootScope);
    }));
});
describe('test application table controller and services : ', function () {
    //module.sharedInjector(); //TODO:we could use it in angular 1.5.1 and use beforeAll instead of all next beforeEach
    beforeEach(module("app"));//beforeAll(module("app"));
    var appController,$timeout,deferred ;

    //inject what we need in next specs
    beforeEach(//beforeAll(
        inject(function (_$q_, _$timeout_, _$controller_, applicationResource) {
            deferred = _$q_.defer();
            $timeout=_$timeout_;
            appController = _$controller_('applicationTableController', {
                "$scope": {},
                "userApplicationService": applicationResource
            });
        })
    );

    //make promises for each spec
    beforeEach(function(){
        var thisSpec=this;
        thisSpec.valueToVerify=0;
        deferred.promise.then(function (data) { thisSpec.valueToVerify = data; });
    });

    it("test ng resource", inject(function (applicationResource) {
        //when it respond to below query it has responded to appCollection query
        applicationResource.query(function (result) {
            deferred.resolve(result.length>0 && appController.appCollection.length>0);
        });
        $timeout.flush();
        expect(this.valueToVerify).toEqual(true);
    }));

    it('add method', function () {
        var len=appController.appCollection.length;
        appController.addNewApplication({name: "a", packname: "b"},function(){
            deferred.resolve(appController.appCollection.length > len);
        });

        $timeout.flush();
        expect(this.valueToVerify).toEqual(true);
    });

    //test remove
    it('remove method', function () {
        //TODO: it must get confirmation
        appController.appCollection=[{id:1,name:"a",packname:"b"}];
        appController.removeApplication(appController.appCollection[0],function(){
            deferred.resolve(appController.appCollection.length <1 );
        });
        $timeout.flush();
        expect(this.valueToVerify).toEqual(true);
    });

    //test each step of edit
    it('edit methods', function () {
        appController.appCollection = [{name: "a", packname: "a"}, {name: "b", packname: "b"}];
        var firstApp = appController.appCollection[0];
        appController.startEdit(firstApp);
        expect(firstApp.isEditing).toEqual(true);

        appController.cancelEdit(firstApp);
        expect(firstApp.isEditing).toEqual(false);

        appController.startEdit(firstApp);
        //TODO: if app didnt change dont send data to server
        appController.commitEdit(firstApp);
        expect(firstApp.isEditing).toEqual(false);
    });
});