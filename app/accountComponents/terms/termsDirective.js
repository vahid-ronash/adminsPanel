/**
 * Created by mojtaba on 4/27/16.
 */

/**
 * @ngdoc directive
 * @name app.directive.termsContent
 * @scope
 * @restrict EA
 * @description
 * it hold terms
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('termsContent', function () {
            return {
                scope: true,
                restrict: 'EA',
                templateUrl: 'app/accountComponents/terms/terms.html'
            };
        });
})());