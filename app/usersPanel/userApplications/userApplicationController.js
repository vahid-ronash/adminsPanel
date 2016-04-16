/**
 * Created by mojtaba on 3/9/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controller.userApplicationController
     * @description
     * control whole applications
     */
    angular
        .module('app')
        .controller('userApplicationController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
        }]);
})());