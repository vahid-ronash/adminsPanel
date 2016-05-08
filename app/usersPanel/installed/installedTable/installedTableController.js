/**
 * Created by mojtaba on 3/14/16.
 */

/**
 * @ngdoc controller
 * @name app.controller.installedTableController
 * @description
 * it shows all installed devices
 */
/*global angular moment*/
((function() {
    'use strict';
    angular
        .module("app")
        .controller('installedTableController', ['$scope', 'installedResource','$timeout','$filter','panelServices', function ($scope, $installedResource,$timeout,$filter,panelServices) {
            var thisController = this;

            thisController.imeiList=[];
            thisController.imeiHash={};
            $installedResource.getImeiList(function(result){
                var imeiList=result.data;
                for(var i in imeiList){
                    thisController.imeiHash[imeiList[i].imei]=imeiList[i];
                }
            });

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
             * @name addToFavorite
             * @methodOf app.controller.installedTableController
             * @description
             * make dialog to add this device to favorite list
             * @param {object}  row     (selected install)
             */
            thisController.selectedToFavorite=0;
            thisController.addToFavorite=function(row){
                thisController.selectedToFavorite=row;
                $("#addFavoriteDialog").modal();
            };

            /**
             * @ngdoc method
             * @name addNewFavorite
             * @methodOf app.controller.installedTableController
             * @description
             * send data to server to add to favorite list
             */
            thisController.addNewFavorite=function(){
                $("#addFavoriteDialog").modal('hide');
                var favData={imei:thisController.selectedToFavorite.imei,name:thisController.favName};
                $installedResource.addToFavorites(favData,function(){
                    thisController.selectedToFavorite.favorite=favData;
                    thisController.imeiHash[thisController.selectedToFavorite.imei]=favData;
                });
            };

            /**
             * @ngdoc method
             * @name selectPage
             * @methodOf app.controller.installedTableController
             * @description
             * request to load page it will called by smart table
             * @param {object}  tableState     (it served by smart table and contain navigation data)
             */
            thisController.deviceModels=[
                {text:"LG1"},
                {text:"LG2"},
                {text:"LG3"},
                {text:"LG4"},
                {text:"LG5"},
                {text:"LG6"},
                {text:"LG7"},
                {text:"LG8"},
                {text:"LG9"},
                {text:"LG10"},
            ];
            thisController.loadPhones=function(){
                return thisController.deviceModels;
            };

            /**
             * @ngdoc method
             * @name loadApps
             * @methodOf app.controller.installedTableController
             * @description
             * load apps using panelServices to load in ngtag
             */
            panelServices.loadApplications().then(function(results){thisController.applist=results});
            thisController.loadApps=function(){
                return thisController.applist;
            };

            thisController.dateFilter=1450197600000;
            /**
             * @ngdoc method
             * @name startRemoveIMEI
             * @methodOf app.controller.installedTableController
             * @description
             * start remove imei get confirmation
             */
            thisController.startRemoveIMEI=function(row){
                $("#removeFavDialog").modal();
                thisController.selectedToRemoveFavorite=row;
            };

            /**
             * @ngdoc method
             * @name removeIMEI
             * @methodOf app.controller.installedTableController
             * @description
             * send request to remove Favorite
             */
            thisController.removeIMEI=function(){
                $installedResource.removeFromFavorites(thisController.selectedToRemoveFavorite.favorite,function(){
                    $scope.root.handleError({localError:{type:'success',text:$filter('translate')('FAV_REMOVE_SUCCESS_TEXT'),title:$filter('translate')('FAV_REMOVE_SUCCESS_TITLE')}});
                });
            };

            /**
             * @ngdoc method
             * @name callServer
             * @methodOf app.controller.installedTableController
             * @description
             * get data from server for installed table
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
                    for(var i=0;i<thisController.displayed.length;i++){
                        //make it favourite
                        if(thisController.imeiHash[thisController.displayed[i].imei]){
                            thisController.displayed[i].favorite=thisController.imeiHash[thisController.displayed[i].imei];
                        }
                    }
                    if(result.data.previous)thisController.hasPrevious=true;
                    if(result.data.next)thisController.hasNext=true;
                    if(thisController.hasNext) tableState.pagination.numberOfPages=Math.ceil(pagination.start/pagination.number)+2;

                    thisController.isLoading = false;
                });
            };
        }]);
})());