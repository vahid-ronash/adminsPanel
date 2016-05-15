/**
 * Created by mojtaba on 3/15/16.
 */
/*global describe it expect beforeEach inject */
describe('notification page', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_,_$q_,$timeout,$rootScope){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        this.deferred=_$q_.defer();
        this.timeout=$timeout;
    }));

    // it('controller is work', function () {
    //     var controller = $controller('notificationsController', { "$scope": {app:{name:"adminsPanel"}} });
    //     expect(controller.showWizard).toBeDefined();
    // });
});