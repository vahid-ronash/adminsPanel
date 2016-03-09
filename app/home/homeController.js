/**
 * Created by mojtaba on 3/9/16.
 */
/*global angular $ */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('homeController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
        }]);
})());