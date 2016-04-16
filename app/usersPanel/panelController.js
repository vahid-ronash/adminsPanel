/**
 * Created by mojtaba on 3/13/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controller.usersPanelController
     * @description
     * control users panel
     * it contain notifications and faq
     */
    angular
        .module('app')
        .controller('usersPanelController', ['$scope','$state',function($scope,$state){
            var thisController=this;
            thisController.state=$state.current.name;
            thisController.app=$scope.app;//point to parent scope.app
        }]);
})());