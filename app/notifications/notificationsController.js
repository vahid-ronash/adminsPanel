/**
 * Created by mojtaba on 3/15/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:notificationsController
 * @description
 * control notification page
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('notificationsController', ['$scope','$wizard','$filter',function($scope,$wizard,$filter){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app

            var wizardInstance = $wizard.$new({
                title: $filter('translate')('NEW_NOTIF_TITLE'),
                size: 'sm',
                shadow: true,
                //templateUrl:'', //wizard template that is used sx-wizard-tpls.js now

                //on finish
                //$data: Object passed into wizard.
                //$step: The step where user clicked "Finish".
                //$isLastStep: Indicates whether this is the last step.
                //callback: Callback function with a boolean parameter, indicates whether wizard can be closed (valid) or not (invalid).
                successing: function($data, $step, $isLastStep, callback) {
                    return callback(true);
                }
            });
            wizardInstance
                .addStep({
                    id: 'step-1-welcome',
                    title: $filter('translate')('NOTIF_FIRST_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step1.html',
                    controller:'step1Controller',
                    controllerAs:'step1Ctrl'
                })
                .addStep({
                    id: 'step-2-welcome',
                    title: $filter('translate')('NOTIF_SECOND_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step2.html',
                    controller:'step2Controller',
                    controllerAs:'step2Ctrl'
                })
                .addStep({
                    id: 'step-3-welcome',
                    title: $filter('translate')('NOTIF_THIRD_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step3.html',
                    controller:'step3Controller',
                    controllerAs:'step3Ctrl'
                })
                .addStep({
                    id: 'step-4-welcome',
                    title: $filter('translate')('NOTIF_FORTH_STEP'),
                    templateUrl: 'app/notifications/notifWizardSteps/step4.html',
                    controller:'step4Controller',
                    controllerAs:'step4Ctrl'
                });


            /**
             * @ngdoc method
             * @name showWizard
             * @methodOf module.notificationWizardController
             * @description
             * ignite the wizard
             */
            thisController.data={};
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