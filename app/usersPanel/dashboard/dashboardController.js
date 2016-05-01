/**
 * Created by mojtaba on 3/9/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controller.dashboardController
     * @description
     * control dashboard page
     */
    angular
        .module('app')
        .controller('dashboardController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            thisController.data={
                activeInstallationCount:32062,
                applicationCount:5,
                notificationSent:3512,
            };
        }]);
})());