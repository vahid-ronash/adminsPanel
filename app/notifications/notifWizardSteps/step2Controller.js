/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:step2Controller
 * @description
 * control notification wizard step 2
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step2Controller', ['$scope', 'Upload', '$timeout','$http', function ($scope, Upload,$timeout,$http) {
            //var thisController=this;
            var asThisController=$scope.step2Ctrl={};
            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                contextData.stepData[2]=asThisController.data;
                callback(true);
            };
            asThisController.data={
                exTitle:"",
                exText:"",
                brief:"",
                croppedDataUrl:""
            };

            asThisController.selectedFile=0;
        }]);
})());