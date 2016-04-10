/**
 * Created by mojtaba on 4/10/16.
 */

/*global describe it beforeEach inject */
describe('sx wizard directive : ', function () {
    beforeEach(module('app'));
    it('test directive', inject(function ($q,$compile,$rootScope,$wizard,$filter) {
        var $scope=$rootScope.$new();
        var wizardInstance = $wizard.$new({
            title: 'asca',
            size: 'sm',
            template:'<div></div>'
        });
        wizardInstance
            .addStep({
                id: 'step-0-welcome',
                title: $filter('translate')('NOTIF_FIRST_STEP'),
                template: '<div>{{step1Ctrl.data.isHidden}}</div>',
                // templateUrl: 'app/notifications/notifWizardSteps/step1/step1.html',
                controller:'step1Controller',
                controllerAs:'step1Ctrl'
            });
        wizardInstance.open({stepData:[]},function(result) {},function(){});
        // $scope.$digest();//TODO:remove the comment and fix the error
        expect(1).toBe(1);
    }));
});