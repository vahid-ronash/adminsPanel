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
        .controller('notificationsController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app

            /**
             * @ngdoc method
             * @name showWizard
             * @methodOf app.controller.notificationsController
             * @description
             * ignite the wizard
             */
            thisController.showWizard=function(){
                $scope.$root.startNotificationWizard(function(){
                    
                });
            };

            /**
             * @ngdoc method
             * @name showJSONSending
             * @methodOf app.controller.notificationsController
             * @description
             * send json
             */

            // thisController.jsonSuccessing=function($data, $step, $isLastStep, callback) {
            //     var res=JSON.parse($data.jsonStepData[0].json);
            //     notificationResource.sendNotification(res).then(callback);
            //     return true;
            // };
            // var jsonWizardInstance = $wizard.$new({
            //     title: $filter('translate')('NEW_NOTIF_TITLE'),
            //     size: 'md',
            //     shadow: true,
            //     successing:thisController.jsonSuccessing
            // });
            // jsonWizardInstance
            //     .addStep({
            //         id: 'JSONGIR',
            //         title: $filter('translate')('NOTIF_JSON_FIRST_STEP'),
            //         templateUrl: 'app/usersPanel/notifications/notifWizardSteps/jsonNotifStep/step1.html',
            //         controller:'jsonStep1Controller',
            //         controllerAs:'jsonStep1Ctrl'
            //     });
            // thisController.data={};
            // thisController.showJSONSending=function(){
            //     thisController.data.jsonStepData=[];
            //     jsonWizardInstance.open(
            //         thisController.data,
            //         function(result) {//it will call after successing
            //             thisController.result = result;
            //             return true;
            //         },
            //         //window.angular.noop
            //         function(){// on user cancel wizard
            //
            //         }
            //     );
            //
            // };
        }]);
})());