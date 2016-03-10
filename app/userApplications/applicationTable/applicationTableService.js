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
angular
    .module("app")
    .factory('userApplicationService', ['$http',function($http){
        return new function(){
            var thisService=this;

            /**
             * @ngdoc method
             * @name getApplicationList
             * @methodOf module.applicationTableController
             * @description
             * load all user application by send a get request
             * @param {function} callback function used when data loaded from server
             */
            thisService.getApplicationList=function(callback){
                $http.get('application/list').then(function(response) {
                    callback(response);
                });
            };

            /**
             * @ngdoc method
             * @name addApplication
             * @methodOf module.applicationTableController
             * @description
             * add new application for user
             * @param newApplicationData
             * @param callback
             */
            thisService.addApplication=function(newApplicationData,callback){
                $http.put("application").then(function(response){
                    callback(response);
                });
            };

            /**
             * @ngdoc method
             * @name editApplication
             * @methodOf module.applicationTableController
             * @description
             * edit application name
             * @param editedApplicationData
             * @param callback
             */
            thisService.editApplication=function(editedApplicationData,callback){
                $http.put("application").then(function(response){
                    callback(response);
                });
            };

            /**
             * @ngdoc method
             * @name addApplication
             * @methodOf module.applicationTableController
             * @description
             * add new application for user
             * @param removedApplicationData
             * @param callback
             */
            thisService.removeApplication=function(removedApplicationData,callback){
                $http.delete("application").then(function(response){
                    callback(response);
                });
            };
        };
    }]);