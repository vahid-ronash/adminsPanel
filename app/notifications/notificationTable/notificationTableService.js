/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc service
 * @name adminsPanel.service:notificationResource
 * @description
 * it make connection between this app and server
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module('app')
        .factory('notificationResource', ['$http', function ($http) {
            function NotificationListService() {
                var thisService = this;

                /**
                 * @ngdoc method
                 * @name query
                 * @methodOf module.notificationResource
                 * @description
                 * get notification list for pagination
                 * @param filters indicate page data to load
                 */
                thisService.query = function (filters) {
                    var url = "/notification";
                    return $http.get(url,{
                        params:filters
                    }).then(function (result) {
                        return result.data;
                    });
                };
            }
            return new NotificationListService();
        }]);
})());