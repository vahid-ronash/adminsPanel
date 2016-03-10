/**
 * Created by mojtaba on 3/9/16.
 */
/*global angular describe it expect beforeEach inject */
describe('test application table : ', function() {
    beforeEach(module('app'));
    var $controller, rootScope, compile;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));
    beforeEach(inject(function ($compile, $rootScope) {
        rootScope=$rootScope;
        compile=$compile;
    }));

    it('test directive', function() {
        var elm = angular.element('<applicationTable></applicationTable>');
        compile(elm)(rootScope);
    });

    it('add method', function () {
        var controller = $controller('applicationTableController', { "$scope": {} });
        controller.appCollection=[];
        var newapp={name:"a",packname:"a"};
        controller.addNewApplication(newapp);
        expect(controller.appCollection.length).toEqual(1);
    });

    it('remove method', function () {
        //TODO: it must get confirmation
        var controller = $controller('applicationTableController', { "$scope": {} });
        controller.appCollection=[{name:"a",packname:"a"},{name:"b",packname:"b"}];
        var firstApp=controller.appCollection[0];
        controller.removeApplication(firstApp);
        expect(controller.appCollection.indexOf(firstApp)).toEqual(-1);
    });

    it('edit methods', function () {
        var controller = $controller('applicationTableController', { "$scope": {} });
        controller.appCollection=[{name:"a",packname:"a"},{name:"b",packname:"b"}];
        var firstApp=controller.appCollection[0];
        controller.startEdit(firstApp);
        expect(firstApp.isEditing).toEqual(true);

        controller.cancelEdit(firstApp);
        expect(firstApp.isEditing).toEqual(false);

        controller.startEdit(firstApp);
        //TODO: if app didnt change dont send data to server
        controller.commitEdit(firstApp);
        expect(typeof firstApp.isEditing).toEqual('undefined');
    });
});