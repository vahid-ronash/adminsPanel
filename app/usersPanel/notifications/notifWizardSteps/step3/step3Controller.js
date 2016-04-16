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
        .controller('step3Controller', ['$scope', 'Upload', '$timeout','$http', function ($scope, Upload,$timeout,$http) {
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
            asThisController.data={
                big_tiltle:"",
                big_content:"",
                summary:"",
                croppedDataUrl:""
            };

            asThisController.selectedFile=0;
        }]);
})());