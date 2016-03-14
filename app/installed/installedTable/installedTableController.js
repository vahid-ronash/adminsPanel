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
            var thisController = this;
            /**
             * @ngdoc method
             * @name sendTest
             * @methodOf module.installedTableController
             * @description
             * send test notification by a link that server provided
             * @param row (selected install)
             */
            thisController.sendTest=function(row){
                $http.get(row.test).then(function(){
                    //TODO:alert your notification has sent to this device successfully
                },function(){});//TODO:alert your notif couldn't send because of err
            };

            /**
             * @ngdoc method
             * @name selectPage
             * @methodOf module.installedTableController
             * @description
             * request to load page it will called by smart table
             * @param tableState
             */
            thisController.callServer=function(tableState){
                thisController.isLoading = true;
                var pagination = tableState.pagination;
                var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
                var number = pagination.number || 10;  // Number of entries showed per page.
                var filters={start:start,number:number,params:tableState};
                return $installedResource.query(filters).then(function (result) {
                    thisController.displayed = result.data;
                    tableState.pagination.numberOfPages = result.numberOfPages;//set the number of pages so the pagination can update
                    thisController.isLoading = false;
                });
            };

            //send a request to get installation list
            //thisController.selectPage();
        }]);
})());