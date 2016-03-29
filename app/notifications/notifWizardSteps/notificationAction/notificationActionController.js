/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:notificationActionController
 * @description
 * it select a action for notification click
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .controller('notificationActionController', ['$scope', function ($scope) {
            var thisController = this;
            
            thisController.buttonClickActionList = [
                {id: 1, name: "no action", desc: 'با کلیک روی نوتیفیکیشن هیچ اتفاقی نمی افتد.'},
                {id: 2, name: "open Application", desc: 'با کلیک روی نوتیفیکیشن اپلیکیشن باز میشود.'},
                {id: 3, name: "open URL", desc: 'با کلیک روی نوتیفیکیشن یک لینک در مرورگر او اجرا میشود.'},
                {id: 4, name: "open Dialog", desc: 'با کلیک روی نوتیفیکیشن یک پنجره ای برای او باز میشود.'}
            ];
            $scope.$selected=thisController.notifClickAction=$scope.$selected || thisController.buttonClickActionList[0];
        }]);
})());