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
        .controller('notificationTableController', ['$scope', 'notificationResource','$stateParams','$window','panelServices', function ($scope, $notificationResource,$stateParams,$window,panelServices) {
            var thisController = this;
            /**
             * @ngdoc method
             * @name selectPage
             * @methodOf app.controller.notificationTableController
             * @description
             * request to load page it will called by smart table
             * @param {object} tableState   served by smart table
             */
            thisController.search={};
            thisController.displayed=[];
            thisController.rowInPage=20;
            thisController.lastTableState=0;
            //set table height
            thisController.tableHeight=$window.innerHeight-56-64-100;//height of header footer and margin
            thisController.rowInPage=Math.floor(thisController.tableHeight/55*2);//heightOfRow=55


            panelServices.loadApplications().then(function(results){
                thisController.appList=results;
            });

            thisController.callServer=function(tableState){
                thisController.isLoading = true;
                thisController.lastTableState=tableState;

                //PAGINATION
                var pagination = tableState.pagination;
                var filters={
                    offset:pagination.start || 0,
                    limit:pagination.number || thisController.rowInPage
                };

                //SORT
                if(tableState.sort.predicate){
                    filters.ordering=(tableState.sort.reverse?"-":"")+tableState.sort.predicate;
                }

                //SEARCH
                filters=angular.extend(filters,tableState.search.predicateObject);
                if($stateParams.status)filters.status=$stateParams.status;

                function serverCallback(result){
                    var resData=result.data.results;
                    for(var i=0;i<resData.length;i++){
                        var di=resData[i];
                        var sum=di.clicked_count+di.dismissed_count;
                        if(!sum){di.clicked_count=di.dismissed_count=1;sum=2}
                        di.clickedPrecent=Math.floor(100*di.clicked_count/sum);
                    }
                    if(pagination.start===0)
                        thisController.displayed = resData;
                    else if(resData.length){
                        thisController.displayed=thisController.displayed.concat(resData);
                    }
                    thisController.hasNoResult=thisController.displayed.length?false:true;

                    if(result.data.previous)thisController.hasPrevious=true;
                    if(result.data.next)thisController.hasNext=true;

                    thisController.isLoading = false;
                }
                return $notificationResource.query(filters).then(serverCallback);
            };
        }]);
})());