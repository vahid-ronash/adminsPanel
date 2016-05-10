/**
 * Created by mojtaba on 5/9/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.modalController
 * @description
 * control modal
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('modalController', ['$scope', '$attrs','$element', function ($scope, $attrs, $element) {
            if(!$scope.control)$scope.control={};
            $scope.control.close=function(){
                $element.children('.modal').modal('hide');
            };
            $scope.control.open=function(options){
                $element.children('.modal').modal(options);
            };
        }]);
})());