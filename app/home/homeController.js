/**
 * Created by mojtaba on 3/9/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controllers.homeController
     * @description
     * control home
     */
    angular
        .module('app')
        .controller('homeController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
        }]);
})());