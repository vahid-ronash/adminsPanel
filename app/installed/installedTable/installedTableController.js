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
                //$http.get(row.test).then(function(){
                //    TODO:alert your notification has sent to this device successfully
                //},function(){});//TODO:alert your notif couldn't send because of err
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

                var filters={
                    offset:pagination.start || 0,
                    limit:pagination.number || 10
                };
                if(tableState.sort.predicate){
                    filters.ordering=(tableState.sort.reverse?"-":"")+tableState.sort.predicate;
                }

                filters=angular.extend(filters,tableState.search.predicateObject);

                return $installedResource.query(filters).then(function (result) {
                    thisController.displayed = result;
                    tableState.pagination.numberOfPages = 5;//TODO:result.numberOfPages;//set the number of pages so the pagination can update
                    thisController.isLoading = false;
                });
            };

            //send a request to get installation list
            //thisController.selectPage();
        }]);
})());