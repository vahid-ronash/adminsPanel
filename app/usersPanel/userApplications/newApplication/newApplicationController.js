/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.newApplicationController
 * @description
 * control new application wizard
 */
/* $ global angular */
((function () {
    'use strict';
    angular
        .module('app')
        .controller('newApplicationController', ['$scope','applicationResource','$filter','$state','$timeout', function ($scope,$applicationResource,$filter,$state,$timeout) {
            var thisController=this;
            thisController.currentStep=0;

            thisController.wizardData={
                steps:{},
                canSendNotification:false
            };
            thisController.modal={};
            $scope.control.start=function(){
                thisController.appCreated=false;
                thisController.modal.open({
                    backdrop: 'static',
                });
                $timeout(function(){
                    thisController.startFocus=true;
                },600);

                thisController.data={
                    application_id:"",
                    provider:thisController.providerList[0].value
                };
            };

            thisController.providerList=[
                {name:$filter('translate')('DONT_HAVE_PROVIDER'),value:"none"},
                {name:"JOAPP",value:"JOAPP"},
                {name:"puzzely",value:"puzzely"}
            ];
            var providerHash={};
            for(var i=0;i<thisController.providerList.length;i++){
                providerHash[thisController.providerList[i].value.toLowerCase()]=thisController.providerList[i];
            }
            thisController.providerObject=null;
            thisController.send=function(){
                $applicationResource.save(thisController.data, function (createdApplication) {
                    thisController.appCreated=true;
                    $state.transitionTo('users.applications',{},{reload:true, inherit: false, notify: false });
                });
                // $('#applicationWizardDialog').modal('hide');
            };
        }]);
})());