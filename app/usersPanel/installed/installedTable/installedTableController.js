/**
 * Created by mojtaba on 3/14/16.
 */
/*global angular */
((function() {
    'use strict';
    /**
     * @ngdoc controller
     * @name app.controller.installedTableController
     * @description
     * it shows all installed devices
     */
    angular
        .module("app")
        .controller('installedTableController', ['$scope', 'installedResource', function ($scope, $installedResource,$http) {
            var thisController = this;
            /**
             * @ngdoc method
             * @name sendTest
             * @methodOf app.controller.installedTableController
             * @description
             * send test notification by a link that server provided
             * @param {object}  row     (selected install)
             */
            thisController.sendTest=function(row){
                $installedResource.sendTest(row.id);
            };

            /**
             * @ngdoc method
             * @name selectPage
             * @methodOf app.controller.installedTableController
             * @description
             * request to load page it will called by smart table
             * @param {object}  tableState     (it served by smart table and contain navigation data)
             */

            thisController.rowInPage=6;
            thisController.displayedPages=2;
            thisController.callServer=function(tableState){
                //test ERROR
                // $scope.$root.handleError({status:504,data:"<html><body>its an error i mocked to show here</body></html>"});
                // $scope.$root.handleError({status:504,data:"<html><body>its an error i mocked to show here</body></html>"});
                thisController.isLoading = true;

                //TO fix bug two times loading
                tableState.pagination.number = tableState.pagination.number || thisController.rowInPage;
                tableState.pagination.start = tableState.pagination.start || 0;

                var pagination = tableState.pagination;

                var filters={
                    offset:pagination.start || 0,
                    limit:pagination.number || thisController.rowInPage
                };
                if(tableState.sort.predicate){
                    filters.ordering=(tableState.sort.reverse?"-":"")+tableState.sort.predicate;
                }

                filters=angular.extend(filters,tableState.search.predicateObject);

                return $installedResource.query(filters).then(function (result) {
                    thisController.displayed = result.data.results;
                    for(var i in thisController.displayed){
                        var d=new Date(thisController.displayed[i].creation_time);
                        thisController.displayed[i].creation_time=moment(d).format('jYYYY/jM/jD');
                    }
                    if(result.data.previous)thisController.hasPrevious=true;
                    if(result.data.next)thisController.hasNext=true;
                    if(thisController.hasNext) tableState.pagination.numberOfPages=Math.ceil(pagination.start/pagination.number)+2;

                    thisController.isLoading = false;
                });
            };

            //send a request to get installation list
            //thisController.selectPage();
        }]);
})());