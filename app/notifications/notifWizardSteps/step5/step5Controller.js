/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step5Controller
 * @description
 * control notification wizard step 5
 * enable user to write his json data
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step5Controller', ['$scope', function ($scope) {
            // var thisController=this;
            var asThisController=$scope.step5Ctrl={};
            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                var value=asThisController.aceSession.getDocument().getValue();
                if(value.length>0 && asThisController.aceSession.getAnnotations().length>0){
                    callback(false);
                    $scope.$context.validationError=$filter('translate')('JSON_INCORRECT');
                }
                else {
                    contextData.stepData[4] = {json:value};
                    callback(true);
                }
            };

            asThisController.aceLoaded = function(_editor) {
                asThisController.aceSession = _editor.getSession();
            };
        }]);
})());