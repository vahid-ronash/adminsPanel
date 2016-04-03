/**
 * Created by mojtaba on 3/30/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:step1Controller
 * @description
 * control notification wizard step 2
 * it gives title text icon ticker fields
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module('app')
        .controller('step2Controller', ['$scope', 'Upload', '$timeout','$filter', function ($scope, Upload, $timeout,$filter) {
            //var thisController=this;
            var contextData = $scope.$context.data;
            contextData.canSendNotification = false;
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
            var asThisController = $scope.step2Ctrl = {};
            asThisController.data = {
                title: "",
                content: "",
                ticker: "",
                icon: "",
                action: {}
            };
            asThisController.focusStart=true;
            asThisController.dataChange=function(){
                var data=asThisController.data;
                if (asThisController.isMessageHidden || data.title && data.content && data.title.length && data.content.length) {
                    contextData.canSendNotification = true;
                } else {
                    contextData.canSendNotification = false;
                }
            };
            asThisController.selectedFile = 0;
            asThisController.upload = function () {
                asThisController.isUpload = true;
                if (asThisController.selectedFile && !asThisController.selectedFile.$error) {
                    asThisController.uploadData = {};
                    Upload.upload({
                        url: '/uploadIconImage',
                        data: {
                            username: $scope.username,
                            file: Upload.dataUrltoBlob(asThisController.data.icon, asThisController.selectedFile.name)
                        }
                    }).then(function (resp) {
                        $timeout(function () {
                            $scope.log = 'file: ' +
                                resp.config.data.file.name +
                                ', Response: ' + JSON.stringify(resp.data) +
                                '\n' + $scope.log;
                        });
                    }, function (response) {
                        if (response.status > 0) asThisController.errorMsg = response.status
                            + ': ' + response.data;
                    }, function (evt) {
                        asThisController.uploadData.uploaded = evt.loaded;
                        asThisController.uploadData.total = evt.total;
                        asThisController.uploadData.precent = parseInt(100.0 * evt.loaded / evt.total);

                        //$scope.log = 'progress: ' + progressPercentage +
                        //    '% ' + evt.config.data.file.name + '\n' +
                        //    $scope.log;
                    });
                }
            };
        }]);
})());