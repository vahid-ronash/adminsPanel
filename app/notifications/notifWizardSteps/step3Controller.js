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
            asThisController.maxButtonCount=3;
            asThisController.buttonList=[];

            asThisController.actions=[

            ];
            asThisController.addAction=function(){
                if(asThisController.actions.length<3)
                    asThisController.actions.push({});
            };
            asThisController.removeAction=function(index){
                asThisController.actions.splice(index,1);
            };
        }]);
})());