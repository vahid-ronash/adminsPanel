/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.notificationWizardController
 * @description
 * control notification wizard
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module('app')
        .controller('notificationWizardController', ['$scope','notificationResource', function ($scope,notificationResource) {
            var thisController=this;
            thisController.currentStep=0;

            thisController.wizardData={
                steps:{},
                canSendNotification:false
            };
            $scope.control.start=function(){
                thisController.newNotifModal.open({
                    backdrop: 'static',
                });
                thisController.currentStep=1;
                if(thisController.wizardData.steps[thisController.currentStep]){
                    thisController.wizardData.error="";
                    thisController.wizardData.canSendNotification=false;
                    for(var i in thisController.wizardData.steps)
                        thisController.wizardData.steps[i].reset();
                }
                thisController.updateLevel();
            };


            thisController.success=function(){
                if(thisController.leaveCurrentStep()) {
                    var res={};
                    for(var i in thisController.wizardData.steps){
                        res=angular.extend(res,thisController.wizardData.steps[i].data);
                    }
                    
                    res.show_app=!res.isHidden;
                    delete res.isHidden;

                    notificationResource.sendNotification(res).then(function(){ });
                    thisController.newNotifModal.close();
                    $state.transitionTo('users.notification',{},{reload:true, inherit: false, notify: false });
                }
            };
            thisController.leaveCurrentStep=function(){
                var canLeaveStep=thisController.wizardData.steps[thisController.currentStep].leave();
                if(canLeaveStep){
                    thisController.wizardData.steps[thisController.currentStep].hasSeen=true;
                    thisController.wizardData.error="";
                }
                return canLeaveStep;
            };
            thisController.previous=function(){
                if(thisController.leaveCurrentStep()) {
                    thisController.currentStep--;
                    thisController.updateLevel();
                }
            };
            thisController.next=function(){
                if(thisController.leaveCurrentStep()) {
                    thisController.currentStep++;
                    thisController.updateLevel();
                }
            };
            thisController.updateLevel=function(){
                if(!thisController.wizardData.steps[thisController.currentStep])thisController.wizardData.steps[thisController.currentStep]={};
                setTimeout(function(){
                    if(thisController.wizardData.steps[thisController.currentStep].enter)
                        thisController.wizardData.steps[thisController.currentStep].enter(function(){

                        });
                },100);
            };
        }]);
})());