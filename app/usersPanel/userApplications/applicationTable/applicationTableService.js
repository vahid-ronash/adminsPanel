/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc service
 * @name app.services.applicationResource
 * @description
 * it make connection between this app and server
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .factory('applicationResource', ['$http','URLS','$rootScope', function ($http,URLS,$rootScope) {
            return {
                save:function(data,successCallback,failedCallback){
                    return $http.post(URLS.URL_APP,data).then(successCallback,failedCallback||$rootScope.handleError);
                },
                update:function(data,successCallback,failedCallback){
                    return $http.post(URLS.URL_APP,data).then(successCallback,failedCallback||$rootScope.handleError);
                },
                query:function(filters,successCallback,failedCallback){
                    var url = URLS.URL_APP;
                    return $http.get(url,{
                        params:filters
                    }).then(successCallback,failedCallback||$rootScope.handleError);
                },
                delete:function(applicationID,successCallback,failedCallback){
                    return $http.delete(URLS.URL_APP+applicationID+"/").then(successCallback,failedCallback||$rootScope.handleError);
                },
                getSenderID:function(applicationID,successCallback,failedCallback){
                    return $http.get(URLS.URL_APP+applicationID+"/").then(successCallback,failedCallback||$rootScope.handleError);
                }
            };
            //replace http on ngResource because i cant set it with last slash for requests(ngResource removes last slash in url)

            // return $resource(URLS.URL_APP+':id', {id:'@id'}, {
            //         // add update to actions (is not defined by default)
            //         'update': {method: 'PUT'},
            //         'query': {method: 'GET',isArray: true},
            //     }
            // );
        }]);
})());