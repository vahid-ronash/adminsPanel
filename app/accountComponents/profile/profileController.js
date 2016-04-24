/**
 * Created by mojtaba on 4/23/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.profileController
 * @requires $scope
 * @requires AuthService
 * @requires $location
 * @requires $filter
 * @description
 * control change password page
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('profileController', ['$scope', 'AuthService', '$location', '$filter', '$state', function ($scope, $AuthService, $location, $filter, $state) {
            var thisController = this;
            $AuthService.getProfileInfo(function(profile){
                thisController.email=profile.email;
                thisController.personalInfo=profile.personalInfo;
                thisController.changeEmailRequestData={
                    email:profile.email
                }
            });
        }]);
})());
