/**
 * Created by mojtaba on 4/30/16.
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
        .directive('privacyContent', function () {
            return {
                scope: true,
                restrict: 'EA',
                templateUrl: 'app/accountComponents/privacy/privacy.html'
            };
        });
})());