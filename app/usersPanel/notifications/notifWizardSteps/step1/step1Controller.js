/**
 * Created by mojtaba on 3/16/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step1Controller
 * @description
 * control notification wizard step 1
 * it determine notification visibility and app
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module('app')
        .controller('step1Controller', ['$scope', 'Upload', '$timeout', '$http', '$filter', 'URLS','panelServices', function ($scope, Upload, $timeout, $http, $filter, URLS,panelServices) {
            var thisController=this;
            $scope.wizard.steps[1]={
                leave:function(){
                    if (!thisController.data.selectedApps.length) {
                        $scope.wizard.error= $filter('translate')('REQUIRE_APP_ERROR');
                        return false;
                    }
                    else {
                        $scope.wizard.steps[1].data=thisController.data;
                        return true;
                    }
                },
                enter:function(callback){
                    if(!thisController.appList) {
                        panelServices.loadApplications(function(result){
                            thisController.appList = result;
                            callback(true);
                        });
                    }
                },
                reset:function(){
                    thisController.data = {
                        isHidden: false,
                        selectedApps: []
                    };
                }
            };
            $scope.wizard.steps[1].reset();
        }]);
})());