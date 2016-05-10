/**
 * Created by mojtaba on 3/30/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step2Controller
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
            var thisController = this;

            thisController.resultIcon="";

            $scope.wizard.steps[2]={
                leave:function(){
                    if($scope.wizard.canSendNotification) {
                        $scope.wizard.steps[2].data=thisController.data;
                        return true;
                    }
                    else {
                        $scope.wizard.error=$filter('translate')('REQUIRE_TEXT_TITLE');
                        return false;
                    }
                },
                enter:function(){
                    thisController.focusStart=true;
                    thisController.isMessageHidden = $scope.wizard.steps[1].data.isHidden;
                    if (thisController.isMessageHidden)$scope.wizard.canSendNotification=true;
                },
                reset:function(){
                    thisController.data = {
                        title: "",
                        content: "",
                        ticker: "",
                        icon:"",
                        action: {}
                    };
                    thisController.focusStart=true;
                    thisController.selectedFile = 0;
                    thisController.isUploaded=false;
                }
            };
            $scope.wizard.steps[2].reset();

            thisController.dataChange=function(){
                var data=thisController.data;
                $scope.wizard.canSendNotification = !!(thisController.isMessageHidden || data.title && data.content && data.title.length && data.content.length);
            };

            thisController.changeImage=function(){
                thisController.selectedFile = 0;
                thisController.isUploaded=false;
            };

            thisController.upload = function () {
                thisController.isUploading = true;
                notificationResource.uploadImage(thisController.resultIcon,thisController.selectedFile,function success(res){
                    if(res.data) {
                        thisController.data.icon = res.data.url;
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