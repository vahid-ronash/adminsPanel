/**
 * Created by mojtaba on 4/30/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controller.faqController
     * @description
     * control faq page
     */
    angular
        .module('app')
        .controller('faqController', ['$scope',function($scope){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
        }]);
})());