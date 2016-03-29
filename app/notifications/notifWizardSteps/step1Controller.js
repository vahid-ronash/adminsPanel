/**
 * Created by mojtaba on 3/16/16.
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
        .controller('step1Controller', ['$scope', 'Upload', '$timeout','$http', function ($scope, Upload,$timeout,$http) {
            //var thisController=this;
            var asThisController=$scope.step1Ctrl={};

            asThisController.data={
                title:"",
                text:"",
                notifTitleText:""
            };

            asThisController.app={};
            asThisController.selectedApps=[];
            $http.get('/userApp').then(function (result) {
                asThisController.app.list=result.data;
            });

            asThisController.selectedFile=0;

            $scope.$watch('thisController.selectedFile', function () {
                asThisController.upload(asThisController.selectedFile);
            });

            asThisController.upload = function (file) {
                if (file &&!file.$error) {
                    asThisController.uploadData={};
                    Upload.upload({
                        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                        data: {
                            username: $scope.username,
                            file: file
                        }
                    }).then(function (resp) {
                        $timeout(function() {
                            $scope.log = 'file: ' +
                                resp.config.data.file.name +
                                ', Response: ' + JSON.stringify(resp.data) +
                                '\n' + $scope.log;
                        });
                    }, null, function (evt) {
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