/**
 * Created by mojtaba on 3/9/16.
 */
/*global describe it expect beforeEach inject */
describe('userApplications page', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('name has to inherit from parent scope', function () {
        var controller = $controller('userApplicationController', { "$scope": {app:{name:"adminsPanel"}} });
        expect(controller.app.name.length>0).toEqual(true);
    });
});