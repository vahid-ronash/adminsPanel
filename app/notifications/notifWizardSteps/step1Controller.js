/**
 * Created by mojtaba on 3/30/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:step1Controller
 * @description
 * control notification wizard step 1
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step1Controller', ['$scope', 'Upload', '$timeout', function ($scope, Upload,$timeout) {
            //var thisController=this;
            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                contextData.stepData[1]=asThisController.data;
                callback(true);
            };
            $scope.$context.behavior.entering = function(options, callback) {
                asThisController.isMessageHidden=contextData.stepData[0].isHidden;
                callback(true);
            };
            var asThisController=$scope.step1Ctrl={};
            asThisController.data={
                title:"",
                text:"",
                notifTitleText:"",
                croppedDataUrl:"",
                action:{}
            };

            asThisController.selectedFile=0;
            asThisController.upload = function () {
                asThisController.isUpload=true;
                if (asThisController.selectedFile && !asThisController.selectedFile.$error) {
                    asThisController.uploadData={};
                    Upload.upload({
                        url: '/uploadIconImage',
                        data: {
                            username: $scope.username,
                            file: Upload.dataUrltoBlob(asThisController.data.croppedDataUrl, asThisController.selectedFile.name)
                        }
                    }).then(function (resp) {
                        $timeout(function() {
                            $scope.log = 'file: ' +
                                resp.config.data.file.name +
                                ', Response: ' + JSON.stringify(resp.data) +
                                '\n' + $scope.log;
                        });
                    }, function (response) {
                        if (response.status > 0) asThisController.errorMsg = response.status
                            + ': ' + response.data;
                    }, function (evt) {
                        asThisController.uploadData.uploaded=evt.loaded;
                        asThisController.uploadData.total=evt.total;
                        asThisController.uploadData.precent=parseInt(100.0 * evt.loaded / evt.total);

                        //$scope.log = 'progress: ' + progressPercentage +
                        //    '% ' + evt.config.data.file.name + '\n' +
                        //    $scope.log;
                    });
                }
            };
        }]);
})());