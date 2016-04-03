/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:step4Controller
 * @description
 * control notification wizard step 4
 * it show a ui to give 3 action button details
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step4Controller', ['$scope', function ($scope) {
            //var thisController=this;

            var asThisController=$scope.step4Ctrl={};
            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                contextData.stepData[3]=asThisController.data;
                callback(true);
            };

            asThisController.maxButtonCount=3;
            asThisController.buttonList=[];

            asThisController.data={
                buttons:[]//buttons
            };
            asThisController.addAction=function(){
                if(asThisController.data.buttons.length<asThisController.maxButtonCount)
                    asThisController.data.buttons.push({});
            };
            asThisController.removeAction=function(index){
                asThisController.data.buttons.splice(index,1);
            };
        }]);
})());