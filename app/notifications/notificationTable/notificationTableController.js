/**
 * Created by mojtaba on 3/15/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:notificationTableController
 * @description
 * it shows all notification
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .controller('notificationTableController', ['$scope', 'notificationResource', function ($scope, $notificationResource) {
            var thisController = this;

            /**
             * @ngdoc method
             * @name selectPage
             * @methodOf module.notificationTableController
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

                return $notificationResource.query(filters).then(function (result) {
                    thisController.displayed = result.data;
                    tableState.pagination.numberOfPages = result.numberOfPages;//set the number of pages so the pagination can update
                    thisController.isLoading = false;
                });
            };
        }]);
})());