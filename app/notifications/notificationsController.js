/**
 * Created by mojtaba on 3/15/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.notificationsController
 * @description
 * control notification page
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('notificationsController', ['$scope','$wizard','$filter','notificationResource',function($scope,$wizard,$filter,notificationResource){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app

            var wizardInstance = $wizard.$new({
                title: $filter('translate')('NEW_NOTIF_TITLE'),
                size: 'sm',
                shadow: true,
                //templateUrl:'', //wizard template that is used sx-wizard-tpls.js now
                successing:thisController.successing
                //on finish
                //$data: Object passed into wizard.
                //$step: The step where user clicked "Finish".
                //$isLastStep: Indicates whether this is the last step.
                //callback: Callback function with a boolean parameter, indicates whether wizard can be closed (valid) or not (invalid).

            });
            thisController.successing= function($data, $step, $isLastStep, callback) {
                var res={};
                for(var i in $data.stepData){
                    res=angular.extend(res,$data.stepData[i]);
                }
                res.visibility=!res.isHidden;
                delete res.isHidden;

                // var output={notification}
                notificationResource.sendNotification(res).then(callback);
            };
            wizardInstance
                .addStep({
                    id: 'step-0-welcome',
                    title: $filter('translate')('NOTIF_FIRST_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step1/step1.html',
                    controller:'step1Controller',
                    controllerAs:'step1Ctrl'
                })
                .addStep({
                    id: 'step-1-welcome',
                    title: $filter('translate')('NOTIF_FIRST_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step2/step2.html',
                    controller:'step2Controller',
                    controllerAs:'step2Ctrl'
                })
                .addStep({
                    id: 'step-3-welcome',
                    title: $filter('translate')('NOTIF_SECOND_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step3/step3.html',
                    controller:'step3Controller',
                    controllerAs:'step3Ctrl'
                })
                .addStep({
                    id: 'step-4-welcome',
                    title: $filter('translate')('NOTIF_THIRD_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step4/step4.html',
                    controller:'step4Controller',
                    controllerAs:'step4Ctrl'
                })
                .addStep({
                    id: 'step-5-welcome',
                    title: $filter('translate')('NOTIF_FORTH_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step5/step5.html',
                    controller:'step5Controller',
                    controllerAs:'step5Ctrl'
                })
                .addStep({
                    id: 'step-6-welcome',
                    title: $filter('translate')('NOTIF_FIFTH_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step6/step6.html',
                    controller:'step6Controller',
                    controllerAs:'step6Ctrl'
                })
                .addStep({
                    id: 'step-7-welcome',
                    title: $filter('translate')('NOTIF_SIXTH_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step7/step7.html',
                    controller:'step7Controller',
                    controllerAs:'step7Ctrl'
                });


            /**
             * @ngdoc method
             * @name showWizard
             * @methodOf app.controller.notificationsController
             * @description
             * ignite the wizard
             */
            thisController.data={
                stepData:[
                ]
            };
            thisController.showWizard=function(){
                wizardInstance.open(
                    thisController.data,
                    function(result) {//it will call after successing
                        thisController.result = result;
                    },
                    //window.angular.noop
                    function(){// on user cancel wizard

                    }
                );
            }

        }]);
})());