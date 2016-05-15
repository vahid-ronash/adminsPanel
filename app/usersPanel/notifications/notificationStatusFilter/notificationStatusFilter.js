/**
 * Created by mojtaba on 5/8/16.
 */

/**
 * @ngdoc filter
 * @name app.filter.notificationStatus
 * @description
 * replace status id with status name
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .filter('notificationStatus',['DICS',function (DICS) {
            var statusHash=DICS.NOTIF_STATUS;
            return function(input){
                return statusHash[input];
            };
        }]);
})());