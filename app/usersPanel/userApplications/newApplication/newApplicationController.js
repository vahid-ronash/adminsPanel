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
        .controller('newApplicationController', ['$scope','applicationResource', function ($scope,$applicationResource) {
            var thisController=this;
            thisController.currentStep=0;

            thisController.wizardData={
                steps:{},
                canSendNotification:false
            };
            $scope.control.start=function(){
                $('#applicationWizardDialog').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            };

            thisController.providerList=[
                {name:"none",value:"none"},
                {name:"JOAPP",value:"JOAPP"},
                {name:"puzzely",value:"puzzely"}
            ];
            var providerHash={};
            for(var i in thisController.providerList){providerHash[thisController.providerList[i].value.toLowerCase()]=thisController.providerList[i];}
            thisController.providerObject=null;

            thisController.data={
                application_id:""
            };
            thisController.send=function(){
                if(thisController.providerObject.name)
                    thisController.data.provider=thisController.providerObject.value;

                $applicationResource.save(thisController.data, function (createdApplication) {

                });
                $('#applicationWizardDialog').modal('hide');
            };
        }]);
})());