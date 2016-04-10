/**
 * Created by mojtaba on 3/9/16.
 */

/**
 * @ngdoc service
 * @name app.services.notificationResource
 * @description
 * it make connection between this app and server
 */

/*global angular */
((function () {
    'use strict';
    angular
        .module('app')
        .factory('notificationResource', ['$http','URLS', function ($http,URLS) {
            function NotificationListService() {
                var thisService = this;

                /**
                 * @ngdoc method
                 * @name query
                 * @methodOf app.services.notificationResource
                 * @description
                 * get notification list for pagination
                 * @param {object}  filters  indicate page data to load
                 */
                thisService.query = function (filters) {
                    var url = URLS.URL_NOTIF;
                    return $http.get(url,{
                        params:filters
                    }).then(function (result) {
                        return result.data.results;
                    });
                };

                /**
                 * @ngdoc method
                 * @name sendNotification
                 * @methodOf app.services.notificationResource
                 * @description
                 * send notification data
                 * @param {object}  notificationData     indicate notification data
                 */
                thisService.sendNotification= function (notificationData) {
                    var output={
                        notification_data:notificationData,
                        filters:[]
                    };
                    if(notificationData.selectedApps.length<2){
                        output.filters.push({'type': 1, 'criterias': [{'key':'application_id', 'operator': '=', 'value': notificationData.selectedApps[0].application_id}]});
                    }
                    else{
                        output.filters.push({'type': 1, 'criterias': [{'key':'application_id', 'operator': 'in', 'value': notificationData.selectedApps.map(function(app){return app.application_id}).join(",")}]});
                    }
                    delete notificationData.selectedApps;

                    if(notificationData.contacts) {
                        if (notificationData.contacts.length < 2) {
                            output.filters.push({
                                'type': 1,
                                'criterias': [{'key': 'imei', 'operator': '=', 'value': notificationData.contacts[0]}]
                            });
                        }
                        else {
                            output.filters.push({
                                'type': 1,
                                'criterias': [{
                                    'key': 'imei',
                                    'operator': 'in',
                                    'value': notificationData.contacts.join(",")
                                }]
                            });
                        }
                        delete notificationData.contacts;
                    }

                    return $http.post(URLS.URL_NOTIF,output).then(function (result) {
                        return result.data;
                    });
                };
            }
            return new NotificationListService();
        }]);
})());