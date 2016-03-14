/**
 * Created by mojtaba on 3/14/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:installedTableController
 * @description
 * it shows all installed devices
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .controller('installedTableController', ['$scope', 'installedResource', function ($scope, $installedResource,$http) {
            var thisAppController = this;

            //send a request to get application list
            thisAppController.isLoading = true;
            $installedResource
                .query()
                .then(function (list) {
                    thisAppController.installedCollection =list;
                    thisAppController.isLoading = false;
                },function(){//error //TODO : request it again
                });
            thisAppController.sendTest=function(row){
                $http.get(row.test).then(function(){
                    //TODO:alert your notification has sent to this device successfully
                },function(){});//TODO:alert your notif couldn't send because of err
            }
        }]);
})());