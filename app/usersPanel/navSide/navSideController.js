/**
 * Created by mojtaba on 4/13/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.navSideController
 * @description
 * it fill the nav side
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .controller('navSideController', ['$scope','$filter', function ($scope,$filter) {
            var thisController = this;

            thisController.navList=[
                {name:'',link:'',state:''}
            ];

        }]);
})());