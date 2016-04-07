/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:applicationTableController
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
             * @methodOf module.applicationTableController
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

                return $applicationResource.query(filters).then(function (result) {
                    thisController.displayed = result.data.results;
                    tableState.pagination.numberOfPages = 5;//TODO: set page number
                    thisController.isLoading = false;
                });
            };

            thisController.providerList=[
                {name:"none",value:""},
                {name:"JOAPP",value:"JOAPP"},
                {name:"puzzely",value:"puzzely"},
            ];

            /**
             * @ngdoc method
             * @name startNewApplication
             * @methodOf module.applicationTableController
             * @description
             * start to make new application
             */
            thisController.startNewApplication = function () {
                thisController.addMode=true;
                thisController.addFocusStart=true;
                thisController.newApp={provider:thisController.providerList[0]};
            };
            /**
             * @ngdoc method
             * @name startEdit
             * @methodOf module.applicationTableController
             * @description
             * add new application to database
             */
            thisController.addNewApplication = function (newApplicationData,callback) {
                if(newApplicationData.provider.value)
                    newApplicationData.provider=newApplicationData.provider.value;
                $applicationResource.save(newApplicationData, function (createdApplication) {
                    thisController.displayed.push(createdApplication.data);
                    thisController.addMode=false;
                    callback && callback();
                }, function () {
                    //TODO : it didn't save, what i can do?
                });
            };


            /**
             * @ngdoc method
             * @name startEdit
             * @methodOf module.applicationTableController
             * @description
             * cause to show edit panel
             * @param row (selected application)
             */
            thisController.startEdit = function (row) {
                row.isEditing = true;
                row.isFocused= true;
                row.backupName = row.name;

            };

            /**
             * @ngdoc method
             * @name commitEdit
             * @methodOf module.applicationTableController
             * @description
             * apply edit and save result on server
             * @param row (selected application)
             */
            thisController.commitEdit = function (row) {
                //send edited data
                row.provider=row.provider.value;
                if(row.name!==row.backupName) {$applicationResource.update({id: row.id}); }
                row.isEditing = false;
            };

            /**
             * @ngdoc method
             * @name cancelEdit
             * @methodOf module.applicationTableController
             * @description
             * rollback to origin data
             * @param row (selected application)
             */
            thisController.cancelEdit = function (row) {
                row.name = row.backupName;
                row.isEditing = false;
            };


            /**
             * @ngdoc method
             * @name removeApplication
             * @methodOf module.applicationTableController
             * @description
             * get confirm and remove selected application
             * @param row (selected application)
             * @param callback
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
             * @methodOf module.applicationTableController
             * @description
             * show application sender ID
             * @param row (selected application)
             * @param callback
             */
            thisController.showDetail = function (row,callback) {
                if(row.showDetail)row.showDetail=false;
                else{
                    row.showDetail=true;
                    if(!row.senderID){
                       return $applicationResource.getSenderID(row.application_id,function(newrow){
                           row.senderID=JSON.parse(newrow.data.credentials).gcm;
                           callback && callback();
                       });
                   }
                }
            };

        }]);
})());