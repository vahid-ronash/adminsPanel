/**
 * Created by mojtaba on 5/9/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.alertController
 * @description
 * control alert
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('alertController', ['$scope', '$attrs', '$interpolate', '$timeout', function ($scope, $attrs, $interpolate, $timeout) {
            $scope.closeable = !!$attrs.close;

            var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
                $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

            if (dismissOnTimeout) {
                $timeout(function() {
                    $scope.close();
                }, parseInt(dismissOnTimeout, 10));
            }
        }]);
})());