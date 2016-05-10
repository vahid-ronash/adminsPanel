/**
 * Created by mojtaba on 5/8/16.
 */

/**
 * @ngdoc filter
 * @name app.filter.appName
 * @description
 * it replace application id with application name
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .filter('appName',['panelServices',function (panelServices) {
            var appHashByName={};
            panelServices.loadApplications().then(function(result){
                for(var i=0;i<result.length;i++){
                    appHashByName[result[i].id]=result[i].name;
                }
            });
            function appNameFilter(input){
                return appHashByName[input];
            }
            appNameFilter.$stateful=true;
            return appNameFilter;
        }]);
})());