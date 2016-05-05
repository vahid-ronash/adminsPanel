/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc service
 * @name app.services.installedResource
 * @description
 * it make connection between this app and server
 */
/*global angular */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('installedResource', ['$http','URLS','$rootScope', function ($http,URLS,$rootScope) {
            function InstalledService() {
                var thisService = this;

                /**
                 * @ngdoc method
                 * @name query
                 * @methodOf app.services.installedResource
                 * @description
                 * get installed list for pagination
                 * @param {object}  filters     indicate page data to load
                 */
                thisService.query = function (filters) {
                    return $http.get(URLS.URL_INSTALLED,{params:filters}).then(function (result) {
                        return result;
                    },$rootScope.handleError);
                };

                /**
                 * @ngdoc method
                 * @name sendTest
                 * @methodOf app.services.installedResource
                 * @description
                 * send test notification
                 * @param {object}  installationID    its installation id
                 */
                thisService.sendTest = function (installationID) {
                    return $http.post(URLS.URL_INSTALLED+installationID+"/send_test_notification/",{}).then(function () {
                        $rootScope.handleError({localError:{title:'send test',text:'your test has sent',type:'success'}});
                    },$rootScope.handleError);
                };
                /**
                 * @ngdoc method
                 * @name addToFavorites
                 * @methodOf app.services.installedResource
                 * @description
                 * add to favorite list
                 * @param {object}  favData    it has imei and a name
                 */
                thisService.addToFavorites = function (favData,callback) {
                    return $http.post(URLS.URL_IMEI,favData).then(function (result) {
                        callback(true);
                    },$rootScope.handleError);
                };

                /**
                 * @ngdoc method
                 * @name removeFromFavorites
                 * @methodOf app.services.installedResource
                 * @description
                 * add to favorite list
                 * @param {object}  favData    it has imei and a name
                 */
                thisService.removeFromFavorites = function (favData,callback) {
                    return $http.delete(URLS.URL_IMEI,favData).then(function (result) {
                        callback(true);
                    },$rootScope.handleError);
                };

                /**
                 * @ngdoc method
                 * @name getImeiList
                 * @methodOf app.services.installedResource
                 * @description
                 * get all user imei list for user test
                 * @param {object}  callback  it called when its done
                 */
                thisService.getImeiList = function (callback) {
                    return $http.get(URLS.URL_IMEI).then(function (result) {
                        callback(result);
                    },$rootScope.handleError);
                };

            }

            return new InstalledService();
        }]);
})();