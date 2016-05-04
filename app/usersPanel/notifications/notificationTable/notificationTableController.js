/**
 * Created by mojtaba on 3/15/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.notificationTableController
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
             * @methodOf app.controller.notificationTableController
             * @description
             * request to load page it will called by smart table
             * @param {object} tableState   served by smart table
             */
            thisController.itemByPage=6;
            thisController.displayedPages=2;
            thisController.callServer=function(tableState){

                //TO fix bug two times loading
                tableState.pagination.number = tableState.pagination.number || thisController.rowInPage;
                tableState.pagination.start = tableState.pagination.start || 0;
                
                thisController.isLoading = true;
                var pagination = tableState.pagination;

                var filters={
                    offset:pagination.start || 0,
                    limit:pagination.number || thisController.itemByPage
                };
                if(tableState.sort.predicate){
                    filters.ordering=(tableState.sort.reverse?"-":"")+tableState.sort.predicate;
                }
                
                filters=angular.extend(filters,tableState.search.predicateObject);

                return $notificationResource.query(filters).then(function (result) {
                    if(!result.data.results)return;
                    thisController.displayed = result.data.results;
                    for(var i in thisController.displayed){
                        var d=new Date(thisController.displayed[i].send_time);
                        thisController.displayed[i].send_time=moment(d).format('jYYYY/jM/jD');
                    }
                    for(var i=0;i<thisController.displayed.length;i++){
                        var di=thisController.displayed[i];
                        var sum=di.clicked_count+di.dismissed_count;
                        if(!sum){di.clicked_count=di.dismissed_count=1;sum=2}
                        di.clickedPrecent=Math.floor(100*di.clicked_count/sum);
                    }
                    
                    if(result.data.previous)thisController.hasPrevious=true;
                    if(result.data.next)thisController.hasNext=true;
                    if(thisController.hasNext) tableState.pagination.numberOfPages=Math.ceil(pagination.start/pagination.number)+2;
                    thisController.isLoading = false;
                });
            };
        }]);
})());