/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc service
 * @name adminsPanel.service:applicationTableService
 * @description
 * it make connection between this app and server
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .factory('applicationResource', ['$http','URLS', function ($http,URLS) {
            return {
                save:function(data,successCallback,failedCallback){
                    return $http.post(URLS.URL_APP,data).then(successCallback,failedCallback);
                },
                update:function(data,successCallback,failedCallback){
                    return $http.post(URLS.URL_APP,data).then(successCallback,failedCallback);
                },
                query:function(filters,successCallback,failedCallback){
                    var url = URLS.URL_APP;
                    return $http.get(url,{
                        params:filters
                    }).then(successCallback,failedCallback);
                },
                delete:function(data,successCallback,failedCallback){
                    return $http.delete(URLS.URL_APP+data.id).then(successCallback,failedCallback);
                },
                getSenderID:function(applicationID,successCallback,failedCallback){
                    return $http.get(URLS.URL_APP+applicationID+"/").then(successCallback,failedCallback);
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