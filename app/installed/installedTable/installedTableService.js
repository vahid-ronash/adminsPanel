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
        .factory('installedResource', ['$http','URLS', function ($http,URLS) {
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
                        return result.data.results;
                    });
                };
            }

            return new InstalledService();
        }]);
})();