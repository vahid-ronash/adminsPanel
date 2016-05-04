/**
 * Created by mojtaba on 4/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.newApplicationController
 * @description
 * control new application wizard
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module('app')
        .controller('newApplicationController', ['$scope','applicationResource','$filter','$state', function ($scope,$applicationResource,$filter,$state) {
            var thisController=this;
            thisController.currentStep=0;

            thisController.wizardData={
                steps:{},
                canSendNotification:false
            };
            $scope.control.start=function(){
                thisController.appCreated=false;
                $('#applicationWizardDialog').modal({
                    backdrop: 'static',
                    keyboard: false
                });
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
            for(var i in thisController.providerList){providerHash[thisController.providerList[i].value.toLowerCase()]=thisController.providerList[i];}
            thisController.providerObject=null;
            thisController.send=function(){
                $applicationResource.save(thisController.data, function (createdApplication) {
                    thisController.appCreated=true;
                    $state.transitionTo('users.apps');
                });
                // $('#applicationWizardDialog').modal('hide');
            };
        }]);
})());