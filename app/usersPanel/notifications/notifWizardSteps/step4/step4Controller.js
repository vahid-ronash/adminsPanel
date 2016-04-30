/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step4Controller
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
            var thisController=this;

            $scope.wizard.steps[4]={
                leave:function(){
                    $scope.wizard.steps[4].data=thisController.data;
                    return true;
                },
                enter:function(){
                    thisController.focusStart=true;
                    return true;
                },
                reset:function(){
                    thisController.data={
                        buttons:[]//buttons
                    };
                }
            };
            $scope.wizard.steps[4].reset();
            
            thisController.maxButtonCount=3;
            thisController.buttonList=[];


            thisController.addAction=function(){
                if(thisController.data.buttons.length<thisController.maxButtonCount)
                    thisController.data.buttons.push({});
            };
            thisController.removeAction=function(index){
                thisController.data.buttons.splice(index,1);
            };
        }]);
})());