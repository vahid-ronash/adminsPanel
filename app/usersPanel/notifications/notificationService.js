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
        .factory('notificationResource', ['$http','URLS','Upload','$rootScope', function ($http,URLS,Upload,$rootScope) {
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
                        return result;
                    },$rootScope.handleError);
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
                        filters:[{
                            'type': 1,
                            'criterias':[]
                        }]
                    };
                    if(notificationData.selectedApps) {
                        if (notificationData.selectedApps.length < 2) {
                            output.filters[0].criterias.push(
                                {
                                    'key': 'application_id',
                                    'operator': '=',
                                    'value': JSON.stringify(notificationData.selectedApps[0].id)
                                });
                        }
                        else {
                            output.filters[0].criterias.push({
                                'key': 'application_id',
                                'operator': 'in',
                                'value': JSON.stringify(notificationData.selectedApps.map(function (app) {return app.id}))
                            });
                        }
                        delete notificationData.selectedApps;
                    }

                    if(notificationData.contacts) {
                        if (notificationData.contacts.length < 2) {
                            output.filters[0].criterias.push({'key': 'imei', 'operator': '=', 'value': JSON.stringify(notificationData.contacts[0].text)});
                        }
                        else {
                            output.filters[0].criterias.push({
                                'key': 'imei',
                                'operator': 'in',
                                'value': JSON.stringify(notificationData.contacts.map(function(c){return c.text;}))
                            });
                        }
                        delete notificationData.contacts;
                    }

                    return $http.post(URLS.URL_NOTIF,output).then(function (result) {
                        return result.data;
                    },$rootScope.handleError);
                };

                /**
                 * @ngdoc method
                 * @name uploadImage
                 * @methodOf app.services.notificationResource
                 * @description
                 * upload selected image
                 * @param {object}      cropFile            image crop result
                 * @param {object}      selectedFile        file that is selected
                 * @param {function}    successCallback     success callback
                 * @param {function}    failCallback        fail callback
                 * @param {function}    uploadProgress      callback on progress
                 */
                thisService.uploadImage = function (cropFile,selectedFile,successCallback,failCallback,uploadProgress) {
                    if (selectedFile && !selectedFile.$error) {
                        Upload.upload({
                            url: URLS.URL_UPLOAD_ICON,
                            data: {
                                // username: "mojtaba",
                                image: Upload.dataUrltoBlob(cropFile, selectedFile.name)
                            }
                        }).then(successCallback,failCallback||$rootScope.handleError, function (evt) {
                            var res={
                                uploaded:evt.loaded,
                                total:evt.total
                            };
                            uploadProgress(res);
                        });
                    }
                };
            }
            return new NotificationListService();
        }]);
})());