/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step3Controller
 * @description
 * control notification wizard step 3
 * it gives big notification informations big
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step3Controller', ['$scope','$filter','notificationResource', function ($scope,$filter,notificationResource) {
            //var thisController=this;
            var asThisController=$scope.step3Ctrl={};
            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                contextData.stepData[2]=asThisController.data;
                callback(true);
            };
            $scope.$context.behavior.entering = function (options, callback) {
                asThisController.focusStart=true;
                callback(true);
            };
            asThisController.changeImage=function(){
                asThisController.selectedFile = 0;
                asThisController.isUploaded=false;
            };
            asThisController.data={
                big_tiltle:"",
                big_content:"",
                summary:"",
                image:""
            };
            asThisController.resultImg="";
            asThisController.upload = function () {
                asThisController.isUploading = true;
                notificationResource.uploadImage(asThisController.resultImg,asThisController.selectedFile,function success(res){
                    if(res.data) {
                        asThisController.data.image = res.data.url;
                        asThisController.iconURL = res.data.url;
                    }
                    asThisController.isUploading=false;
                    asThisController.isUploaded=true;
                },function failed(err){
                    $scope.$root.handleError(err);
                    asThisController.isUploaded=true;
                },function uploadProgress(progressData){
                    asThisController.uploadData = progressData;
                });
            };
            asThisController.selectedFile=0;
        }]);
})());