/**
 * Created by mojtaba on 3/15/16.
 */
/**
 * @ngdoc controller
 * @name app.controllers.notificationTableController
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
             * @methodOf app.controllers.notificationTableController
             * @description
             * request to load page it will called by smart table
             * @param {object} tableState   served by smart table
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
                    thisController.displayed = result;
                    for(var i in thisController.displayed){
                        var di=thisController.displayed[i];
                        var sum=di.clicked_count+di.dismissed_count;
                        if(!sum){di.clicked_count=di.dismissed_count=1;sum=2}
                        di.clickedPrecent=Math.floor(100*di.clicked_count/sum);
                    }
                    tableState.pagination.numberOfPages = 5;//TODO:result.numberOfPages;//set the number of pages so the pagination can update
                    thisController.isLoading = false;
                });
            };
        }]);
})());