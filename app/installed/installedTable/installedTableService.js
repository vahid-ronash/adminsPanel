/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc service
 * @name adminsPanel.service:installedResource
 * @description
 * it make connection between this app and server
 */
/*global angular */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('installedResource', ['$http', function ($http) {
            function InstalledService() {
                var thisService = this;

                /**
                 * @ngdoc method
                 * @name query
                 * @methodOf module.installedResource
                 * @description
                 * get installed list for pagination
                 * @param filters indicate page data to load
                 */
                thisService.query = function (filters) {
                    var url = "/installed";
                    return $http.post(url,filters).then(function (result) {
                        return result.data;
                    });
                };
            }

            return new InstalledService();
        }]);
})();