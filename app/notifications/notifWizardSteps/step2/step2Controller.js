/**
 * Created by mojtaba on 3/30/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step1Controller
 * @description
 * control notification wizard step 2
 * it gives title text icon ticker fields
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module('app')
        .controller('step2Controller', ['$scope','$filter','notificationResource', function ($scope,$filter,notificationResource) {
            //var thisController=this;
            var contextData = $scope.$context.data;
            contextData.canSendNotification = false;

            var asThisController = $scope.step2Ctrl = {};
            asThisController.data = {
                title: "",
                content: "",
                ticker: "",
                icon:"",
                action: {}
            };
            asThisController.resultIcon="";
            
            $scope.$context.behavior.leaving = function (options, callback) {
                contextData.stepData[1] = asThisController.data;
                if(contextData.canSendNotification)
                    callback(true);
                else {
                    callback(false);
                    $scope.$context.validationError=$filter('translate')('REQUIRE_TEXT_TITLE');
                }
            };
            $scope.$context.behavior.entering = function (options, callback) {
                asThisController.focusStart=true;
                asThisController.isMessageHidden = contextData.stepData[0].isHidden;
                if (asThisController.isMessageHidden)contextData.canSendNotification=true;
                callback(true);
            };

            asThisController.focusStart=true;
            asThisController.dataChange=function(){
                var data=asThisController.data;
                contextData.canSendNotification = !!(asThisController.isMessageHidden || data.title && data.content && data.title.length && data.content.length);
            };
            asThisController.selectedFile = 0;
            asThisController.changeImage=function(){
                asThisController.selectedFile = 0;
                asThisController.isUploaded=false;
            };
            asThisController.isUploaded=false;
            asThisController.upload = function () {
                asThisController.isUploading = true;
                notificationResource.uploadImage(asThisController.resultIcon,asThisController.selectedFile,function success(res){
                    if(res.data)
                        asThisController.data.icon=res.data.url;
                    asThisController.isUploading=false;
                    asThisController.isUploaded=true;
                },function failed(err){
                    asThisController.isUploaded=true;
                },function uploadProgress(progressData){
                    asThisController.uploadData = progressData;
                });
            };
        }]);
})());