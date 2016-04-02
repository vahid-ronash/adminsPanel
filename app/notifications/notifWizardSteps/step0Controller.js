/**
 * Created by mojtaba on 3/16/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:step0Controller
 * @description
 * control notification wizard step 1
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step0Controller', ['$scope', 'Upload', '$timeout','$http', function ($scope, Upload,$timeout,$http) {
            //var thisController=this;
            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                if(!asThisController.data.selectedApps.length){
                    callback(false);
                }
                else {
                    contextData.stepData[0]=asThisController.data;
                    callback(true);
                }
            };
            $scope.$context.behavior.entering = function(options, callback) {
                console.log(options);
                $http.get('/userApp').then(function (result) {
                    asThisController.appList=result.data;
                    callback(true);
                });
            };
            var asThisController=$scope.step0Ctrl={};
            asThisController.data={
                isHidden:false,
                selectedApps:[]
            };
        }]);
})());