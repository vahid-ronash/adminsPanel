/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:step3Controller
 * @description
 * control notification wizard step 3
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step3Controller', ['$scope', function ($scope) {
            //var thisController=this;

            var asThisController=$scope.step3Ctrl={};
            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                contextData.stepData[3]=asThisController.data;
                callback(true);
            };

            asThisController.maxButtonCount=3;
            asThisController.buttonList=[];

            asThisController.data={
                actions:[]
            };
            asThisController.addAction=function(){
                if(asThisController.data.actions.length<3)
                    asThisController.data.actions.push({});
            };
            asThisController.removeAction=function(index){
                asThisController.data.actions.splice(index,1);
            };
        }]);
})());