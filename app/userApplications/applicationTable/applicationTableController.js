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
            var thisAppController = this;

            //send a request to get application list
            thisAppController.isLoading = true;
            $applicationResource.query(function (result) {
                thisAppController.appCollection=result.data;
                thisAppController.isLoading = false;
            }, function () {//error
                //TODO : request it again
            });


            /**
             * @ngdoc method
             * @name startNewApplication
             * @methodOf module.applicationTableController
             * @description
             * start to make new application
             */
            thisAppController.startNewApplication = function () {
                thisAppController.addMode=true;
                thisAppController.addFocusStart=true;
                thisAppController.newApp={};
                //TODO: it will start a wizard to add a new application
            };
            /**
             * @ngdoc method
             * @name startEdit
             * @methodOf module.applicationTableController
             * @description
             * add new application to database
             */
            thisAppController.addNewApplication = function (newApplicationData,callback) {
                $applicationResource.save(newApplicationData, function (createdApplication) {
                    thisAppController.appCollection.push(createdApplication);
                    thisAppController.addMode=false;
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
            thisAppController.startEdit = function (row) {
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
            thisAppController.commitEdit = function (row) {
                //send edited data
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
            thisAppController.cancelEdit = function (row) {
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
            thisAppController.removeApplication = function (row,callback) {
                //TODO:get confirm
                $applicationResource.delete({id:row.id}, function () {
                    var index = thisAppController.appCollection.indexOf(row);
                    thisAppController.appCollection.splice(index, 1);
                    callback && callback();
                    //alert('application ' + row.name + ' deleted');
                });
            };
        }]);
})());