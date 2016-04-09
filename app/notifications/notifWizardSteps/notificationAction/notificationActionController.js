/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.notificationActionController
 * @description
 * it select a action for notification click
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .controller('notificationActionController', ['$scope','$filter', function ($scope,$filter) {
            var thisController = this;

            thisController.buttonClickActionList = [
                {id: 1, name: $filter('translate')("NOTHING_HAPPEN_NAME"), desc:$filter('translate')('NOTHING_HAPPEN_DESC')},
                {id: 2, name: $filter('translate')("OPEN_APP_NAME"), desc:$filter('translate')('OPEN_APP_DESC' )},
                {id: 3, name: $filter('translate')("OPEN_URL_NAME"), desc:$filter('translate')('OPEN_URL_DESC'  )},
                {id: 4, name: $filter('translate')("OPEN_URI_NAME"), desc:$filter('translate')("OPEN_URI_DESC" )},
                {id: 5, name: $filter('translate')("OPEN_DIALOG_NAME"), desc:$filter('translate')("OPEN_DIALOG_DESC" )}
            ];
            var actionTypeMap={1:'',2:'a',3:'u',4:'u',5:'d'};
            thisController.selectedAction=thisController.buttonClickActionList[0];
            thisController.selectAction=function(){
                thisController.actionData.action_type=actionTypeMap[thisController.selectedAction.id];
            };

            $scope.$actionData=thisController.actionData=angular.extend({
                action_type:actionTypeMap[thisController.buttonClickActionList[0].id],
                url:""
            },$scope.$actionData);
        }]);
})());