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
            });
            // thisController.email="";
            // thisController.personalInfo={
            //     name:"filan",
            //     family:"bahmani",
            //     sex:"men",
            //     nationalCode:"32165146514",
            //     homePhone:"021-32165165",
            //     phone:"0912156122",
            //     address:"tehran-invar-invartar",
            //     type:"haghighi"
            // }
        }]);
})());
