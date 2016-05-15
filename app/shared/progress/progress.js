/**
 * Created by mojtaba on 5/9/16.
 */

/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .constant('uibProgressConfig', {
            animate: true,
            max: 100
        })
        /**
         * @ngdoc controller
         * @name app.controller.UibProgressController
         * @description
         * control progresss
         */
        .controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function ($scope, $attrs, progressConfig) {
            var self = this,
                animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

            this.bars = [];
            $scope.max = getMaxOrDefault();

            this.addBar = function (bar, element, attrs) {
                if (!animate) {
                    element.css({'transition': 'none'});
                }

                this.bars.push(bar);

                bar.max = getMaxOrDefault();
                bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

                bar.$watch('value', function (value) {
                    bar.recalculatePercentage();
                });

                bar.recalculatePercentage = function () {
                    var totalPercentage = self.bars.reduce(function (total, bar) {
                        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
                        return total + bar.percent;
                    }, 0);

                    if (totalPercentage > 100) {
                        bar.percent -= totalPercentage - 100;
                    }
                };

                bar.$on('$destroy', function () {
                    element = null;
                    self.removeBar(bar);
                });
            };

            this.removeBar = function (bar) {
                this.bars.splice(this.bars.indexOf(bar), 1);
                this.bars.forEach(function (bar) {
                    bar.recalculatePercentage();
                });
            };

            //$attrs.$observe('maxParam', function(maxParam) {
            $scope.$watch('maxParam', function (maxParam) {
                self.bars.forEach(function (bar) {
                    bar.max = getMaxOrDefault();
                    bar.recalculatePercentage();
                });
            });

            function getMaxOrDefault() {
                return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
            }
        }])
        
        /**
         * @ngdoc directive
         * @name app.directive.uibProgressbar
         * @scope
         * @restrict EA
         * @description
         * it make progress bar
         */
        .directive('uibProgressbar', function () {
            return {
                replace: true,
                transclude: true,
                controller: 'UibProgressController',
                scope: {
                    value: '=',
                    maxParam: '=?max',
                    type: '@'
                },
                templateUrl: 'app/shared/progress/progressbar.html',
                link: function (scope, element, attrs, progressCtrl) {
                    progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
                }
            };
        });
})());