/**
 * Created by mojtaba on 3/14/16.
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('installedController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
        }]);
})());