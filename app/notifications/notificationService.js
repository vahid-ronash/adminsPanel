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

                /**
                 * @ngdoc method
                 * @name sendNotification
                 * @methodOf module.notificationResource
                 * @description
                 * send notification data
                 * @param notificationData indicate notification data
                 */
                thisService.sendNotification= function (notificationData) {
                    var url = "/notification/notifications/";
                    var output={
                        notification_data:notificationData
                    };

                    if(notificationData.selectedApps.length>1){
                        output.filters=[{'type': 1, 'criterias': [{'key':'application_id', 'operator': '=', 'value': notificationData.selectedApps[0]}]}]
                    }
                    else{
                        output.filters=[{'type': 1, 'criterias': [{'key':'application_id', 'operator': 'in', 'value': notificationData.selectedApps.join(",")}]}]
                    }

                    return $http.post(url,output).then(function (result) {
                        return result.data;
                    });
                };
            }
            return new NotificationListService();
        }]);
})());