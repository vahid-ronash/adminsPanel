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
        .controller('installedTableController', ['$scope', 'installedResource','$timeout','$filter','panelServices','$window', function ($scope, $installedResource,$timeout,$filter,panelServices,$window) {
            var thisController = this;

            thisController.imeiList=[];
            thisController.imeiHash={};
            $installedResource.getImeiList(function(result){
                var imeiList=result.data.results;
                for(var i=0;i<imeiList.length;i++){
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
                thisController.newFavModal.open();
            };

            /**
             * @ngdoc method
             * @name addNewFavorite
             * @methodOf app.controller.installedTableController
             * @description
             * send data to server to add to favorite list
             */
            thisController.addNewFavorite=function(){
                thisController.newFavModal.close();
                var favData={imei:thisController.selectedToFavorite.imei,name:thisController.favName};
                $installedResource.addToFavorites(favData,function(favResult){
                    $state.transitionTo('users.installed',{},{reload:true, inherit: false, notify: false });
                    // thisController.selectedToFavorite.favorite=favResult.data;
                    // thisController.imeiHash[thisController.selectedToFavorite.imei]=favResult.data;
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
            panelServices.loadApplications().then(function(results){
                thisController.appList=results;
            });

            thisController.dateFilter=1450197600000;
            /**
             * @ngdoc method
             * @name startRemoveIMEI
             * @methodOf app.controller.installedTableController
             * @description
             * start remove imei get confirmation
             */
            thisController.startRemoveIMEI=function(row){
                thisController.removeConfirmModal.open();
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
                    $scope.$root.handleError({localError:{type:'success',text:$filter('translate')('FAV_REMOVE_SUCCESS_TEXT'),title:$filter('translate')('FAV_REMOVE_SUCCESS_TITLE')}});
                    thisController.selectedToRemoveFavorite.favorite=0;
                });
            };

            /**
             * @ngdoc method
             * @name runSearch
             * @methodOf app.controller.installedTableController
             * @description
             * run callserver method with search parameter
             */
            thisController.runSearch=function(){
                var predicate={};
                for(var att in thisController.search){
                    if(thisController.search[att] ) {
                        if (att == 'creation_time') {
                            var time = moment(thisController.search[att], 'jYYYY/jM/jD').format('YYYY-MM-DD');
                            predicate[att+"__gte"]=time+" 00:00:00";
                            predicate[att+"__lte"]=time+" 23:59:59";
                        }
                        else {
                            predicate[att] = thisController.search[att];
                        }
                    }
                }
                thisController.lastTableState.search.predicateObject=predicate;
                thisController.lastTableState.pagination.start=0;
                thisController.callServer(thisController.lastTableState);
            };

            /**
             * @ngdoc method
             * @name callServer
             * @methodOf app.controller.installedTableController
             * @description
             * get data from server for installed table
             */
            thisController.search={};
            thisController.rowInPage=20;
            thisController.lastTableState=0;
            thisController.displayed=[];

            thisController.tableHeight=$window.innerHeight-56-64-100;//height of header footer and margin
            thisController.rowInPage=Math.floor(thisController.tableHeight/55*2);//heightOfRow=55
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
                function serverCallback(result){
                    var resData=result.data.results;
                    for(var i=0;i<resData.length;i++){
                        if(thisController.imeiHash[resData[i].imei]){
                            resData[i].favorite=thisController.imeiHash[resData[i].imei];
                        }
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
                if(tableState.search.predicateObject && tableState.search.predicateObject.fav==true){
                    delete filters.fav;
                    return $installedResource.queryFavorites(filters).then(serverCallback);
                }
                else
                    return $installedResource.query(filters).then(serverCallback);
            };
        }]);
})());