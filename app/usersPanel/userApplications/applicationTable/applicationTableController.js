/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.applicationTableController
 * @description
 * it can do CRUD on user's applications by using smartTable
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module("app")
        .controller('applicationTableController', ['$scope', 'applicationResource', function ($scope, $applicationResource) {
            var thisController = this;

            //send a request to get application list
            thisController.isLoading = true;

            /**
             * @ngdoc method
             * @name callServer
             * @methodOf app.controller.applicationTableController
             * @description
             * request to load page it will called by smart table
             * @param {object}      tableState      it served by smart table
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

                return $applicationResource.query(filters).then(function (result) {
                    if(result) {
                        thisController.displayed = result.data.results;
                        tableState.pagination.numberOfPages = 5;//TODO: set page number
                        thisController.isLoading = false;
                    }
                });
            };


            /**
             * @ngdoc method
             * @name removeApplication
             * @methodOf app.controller.applicationTableController
             * @description
             * get confirm and remove selected application
             * @param {object}  row     selected application
             * @param {function} callback   callback when remove done
             */
            thisController.removeApplication = function (row,callback) {
                //TODO:get confirm
                $applicationResource.delete({id:row.id}, function () {
                    var index = thisController.displayed.indexOf(row);
                    thisController.displayed.splice(index, 1);
                    callback && callback();
                    //alert('application ' + row.name + ' deleted');
                });
            };


            /**
             * @ngdoc method
             * @name showDetail
             * @methodOf app.controller.applicationTableController
             * @description
             * show application sender ID
             * @param {object}  row     selected application
             * @param {function} callback   callback when its done
             */
            thisController.showDetail = function (row,callback) {
                if(row.showDetail)row.showDetail=false;
                else{
                    row.showDetail=true;
                    if(!row.senderID){
                       return $applicationResource.getSenderID(row.application_id,function(newrow){
                           row.senderID=JSON.parse(newrow.data.credentials).node;
                           callback && callback();
                       });
                   }
                }
            };

        }]);
})());