/**
 * Created by mojtaba on 3/14/16.
 */
/*global describe it expect beforeEach inject */
describe('installed page', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('controller is work', function () {
        var controller = $controller('installedController', { "$scope": {app:{name:"adminsPanel"}} });
        expect(controller.app.name.length>0).toEqual(true);
    });
});