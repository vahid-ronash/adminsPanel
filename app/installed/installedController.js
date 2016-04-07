/**
 * Created by mojtaba on 3/14/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controllers.installedController
     * @description
     * control whole installed
     */
    angular
        .module('app')
        .controller('installedController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
        }]);
})());