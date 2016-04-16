/**
 * Created by mojtaba on 3/15/16.
 */
/*global describe it expect beforeEach inject */
describe('notification page', function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_,_$q_,$timeout){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        this.deferred=_$q_.defer();
        this.timeout=$timeout;
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
        var deferred=this.deferred;
        controller.valueToVerify=true;
        controller.successing(
            {stepData:[{
                isHidden:true,
                selectedApps:[{application_id:"1231"}],
                contacts:["12","321"]
            }]}
            ,0,0,function(){
                controller.valueToVerify=true;
                deferred.resolve();
            }
        );
        // this.timeout.flush();
        expect(controller.valueToVerify).toEqual(true);
    });
});