/**
 * Created by mojtaba on 4/30/16.
 */

/**
 * @ngdoc directive
 * @name app.directive.simpleModal
 * @scope
 * @restrict EA
 * @description
 * it make simple modal
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('simpleModal', function () {
            return {
                scope: {
                    modalID:"@mid",
                    modalTitle:"@mtitle",
                    modalSizeClass:"@mclass"
                },
                transclude: true,
                restrict: 'EA',
                templateUrl: 'app/shared/modal/modal.html'
            };
        });
})());