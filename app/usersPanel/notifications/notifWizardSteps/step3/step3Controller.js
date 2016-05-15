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
            var thisController=this;

            $scope.wizard.steps[3]={
                leave:function(){
                    $scope.wizard.steps[3].data=thisController.data;
                    return true;
                },
                enter:function(){
                    thisController.focusStart=true;
                    return true;
                },
                reset:function(){
                    thisController.data={
                        big_tiltle:"",
                        big_content:"",
                        summary:"",
                        image:""
                    };
                    thisController.resultImg="";
                    thisController.selectedFile=0;
                }
            };
            $scope.wizard.steps[3].reset();
            
            thisController.changeImage=function(){
                thisController.selectedFile = 0;
                thisController.isUploaded=false;
            };

            thisController.upload = function () {
                thisController.isUploading = true;
                notificationResource.uploadImage(thisController.resultImg,thisController.selectedFile,function success(res){
                    if(res.data) {
                        thisController.data.image = res.data.url;
                        thisController.iconURL = res.data.url;
                    }
                    thisController.isUploading=false;
                    thisController.isUploaded=true;
                },function failed(err){
                    $scope.$root.handleError(err);
                    thisController.isUploaded=true;
                },function uploadProgress(progressData){
                    thisController.uploadData = progressData;
                });
            };

        }]);
})());