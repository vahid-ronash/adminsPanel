/**
 * Created by mojtaba on 4/30/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controller.privacyController
     * @description
     * control faq page
     */
    angular
        .module('app')
        .controller('privacyController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
        }]);
})());