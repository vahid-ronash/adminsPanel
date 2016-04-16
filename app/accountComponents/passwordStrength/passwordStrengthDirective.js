/**
 * Created by mojtaba on 4/16/16.
 */
/**
 * @ngdoc directive
 * @name app.directive.passwordStrength
 * @scope
 * @restrict E
 * @description
 * set password strength
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .directive("passwordStrength", function(){
            return {
                restrict: 'A',
                link: function(scope, element, attrs){
                    scope.$watch(attrs.passwordStrength, function(value) {
                        // console.log(value);
                        if(angular.isDefined(value)){
                            if (value.length > 8) {
                                scope.strength = 'strong';
                            } else if (value.length > 3) {
                                scope.strength = 'medium';
                            } else {
                                scope.strength = 'weak';
                            }
                        }
                    });
                }
            };
        });
})());

/**
 * @ngdoc directive
 * @name app.directive.passwordStrength
 * @scope
 * @restrict E
 * @description
 * it is a component to manage notification
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .directive('passwordStrength', function () {
            return {
                scope: true,
                restrict: 'E',
                controller: 'notificationTableController',
                controllerAs: 'notifTableCtrl',
                templateUrl: 'app/usersPanel/notifications/notificationTable/notificationTable.html'
            };
        });
})());