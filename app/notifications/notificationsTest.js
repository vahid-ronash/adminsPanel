/**
 * Created by mojtaba on 3/15/16.
 */
/*global describe it expect beforeEach inject */
describe('notification page', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('controller is work', function () {
        var controller = $controller('notificationsController', { "$scope": {app:{name:"adminsPanel"}} });
        controller.showWizard();
        expect(controller.showWizard).toBeDefined();
    });
    it('send notification',function(){
        var controller = $controller('notificationsController', { "$scope": {app:{name:"adminsPanel"}} });
        controller.successing(
            {stepData:[{isHidden:true,
                selectedApps:[{application_id:"1231"},{application_id:"1231"}],
                contacts:["12"]
            }]}
            ,0,0,function(isDone){}
        );
        expect(1).toEqual(1);//TODO: make a real check
        controller.successing(
            {stepData:[{
                isHidden:true,
                selectedApps:[{application_id:"1231"}],
                contacts:["12","321"]
            }]}
            ,0,0,function(isDone){}
        );
        expect(1).toEqual(1);
    });
});