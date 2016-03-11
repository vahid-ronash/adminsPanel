/**
 * Created by mojtaba on 3/9/16.
 */
/*global angular describe it expect beforeEach inject */
describe('test application table : ', function () {
    beforeEach(module('app'));
    var controllers, appController, rootScope, compile, httpBackend, appResource;
    beforeEach(
        inject(function ($compile, $rootScope, _$controller_, applicationResource, $httpBackend) {
            rootScope = $rootScope;
            compile = $compile;
            appResource = applicationResource;
            httpBackend = $httpBackend;
            controllers = _$controller_;
            appController = controllers('applicationTableController', {
                "$scope": {},
                "userApplicationService": appResource
            });
        })
    );

    it('test directive', function () {
        var elm = angular.element('<applicationTable></applicationTable>');
        compile(elm)(rootScope);
    });

    it('test ng resource', inject(function ($http) {
        //var result = mockAppResource.query(function (res) {});
        //$http.get('http://localhost/foo')
        var result=[];
        var url='/application';
        $http.get(url)
            .success(function(data, status, headers, config) {
                result= data;
                console.log(data);
            })
            .error(function(data, status, headers, config) {
                console.log("err app loading");
                result= false;
            });
        expect(result.length > 0).toEqual(true);
    }));

    it('add method', function () {
        appController.addNewApplication({name: "a", packname: "a"});
        expect(appController.appCollection.length > 0).toEqual(true);
    });

    it('remove method', function () {
        //TODO: it must get confirmation
        //var controller = $controller('applicationTableController', { "$scope": {} });
        appController.appCollection = [{name: "a", packname: "a"}, {name: "b", packname: "b"}];
        var firstApp = appController.appCollection[0];
        appController.removeApplication(firstApp);
        expect(appController.appCollection.indexOf(firstApp)).toEqual(-1);
    });

    it('edit methods', function () {
        //var controller = $controller('applicationTableController', { "$scope": {} });
        appController.appCollection = [{name: "a", packname: "a"}, {name: "b", packname: "b"}];
        var firstApp = appController.appCollection[0];
        appController.startEdit(firstApp);
        expect(firstApp.isEditing).toEqual(true);

        appController.cancelEdit(firstApp);
        expect(firstApp.isEditing).toEqual(false);

        appController.startEdit(firstApp);
        //TODO: if app didnt change dont send data to server
        appController.commitEdit(firstApp);
        expect(typeof firstApp.isEditing).toEqual('undefined');
    });
});