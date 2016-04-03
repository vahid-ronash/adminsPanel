/**
 * Created by mojtaba on 3/16/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:step1Controller
 * @description
 * control notification wizard step 1
 * it determine notification visibility and app
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step1Controller', ['$scope', 'Upload', '$timeout','$http','$filter', function ($scope, Upload,$timeout,$http,$filter) {
            //var thisController=this;
            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                if(!asThisController.data.selectedApps.length){
                    callback(false);
                    $scope.$context.validationError=$filter('translate')('REQUIRE_APP_ERROR');
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
            var asThisController=$scope.step1Ctrl={};
            asThisController.data={
                isHidden:false,
                selectedApps:[]
            };
        }]);
})());