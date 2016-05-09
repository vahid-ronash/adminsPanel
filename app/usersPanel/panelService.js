/**
 * Created by mojtaba on 5/7/16.
 */

/**
 * @ngdoc service
 * @name app.services.panelServices
 * @description
 * it serve some services for panel element
 */

/*global angular */
((function () {
    'use strict';
    angular
        .module('app')
        .factory('panelServices', ['$http','URLS','$rootScope', function ($http,URLS,$rootScope) {
            return new (function() {
                var thisService = this;

                /**
                 * @ngdoc method
                 * @name loadApplications
                 * @methodOf app.services.panelServices
                 * @description
                 * load users application
                 */
                var applications=0;
                var appPromise=0;
                thisService.loadApplications = function () {
                    if(!appPromise && applications){
                        appPromise= {then:function(callback){callback(thisService.applications)}};
                    }
                    else {
                         appPromise=$http.get(URLS.URL_APP, {}).then(function (result) {
                             appPromise=0;
                             thisService.applications =result.data.results;
                             return thisService.applications;
                        }, $rootScope.handleError);
                    }
                    return appPromise
                };
            })();
        }]);
})());