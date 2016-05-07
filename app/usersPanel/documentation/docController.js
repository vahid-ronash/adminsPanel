/**
 * Created by mojtaba on 4/30/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controller.docController
     * @description
     * control faq page
     */
    angular
        .module('app')
        .controller('docController', ['$scope','$state',function($scope,$state){
            var thisController=this;
            thisController.app=$scope.app;//point to parent scope.app
            $state.$uiViewScrollProvider.useAnchorScroll();
        }]);
})());