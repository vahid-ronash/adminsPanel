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
angular
    .module("app")
    .controller('applicationTableController', ['$scope','userApplicationService', function ($scope,$userApplicationService) {
        var thisAppController=this;

        //send a request to get application list
        $userApplicationService.getApplicationList(function(data){
            thisAppController.appCollection=data;
        });

        /**
         * @ngdoc method
         * @name startNewApplication
         * @methodOf module.applicationTableController
         * @description
         * start to make new application
         */
        thisAppController.startNewApplication=function(){
            //TODO: it will start a wizard to add a new application
        };
        /**
         * @ngdoc method
         * @name startEdit
         * @methodOf module.applicationTableController
         * @description
         * add new application to database
         */
        thisAppController.addNewApplication=function(newApplicationData){
            thisAppController.appCollection.push(newApplicationData);
            $userApplicationService.addApplication(newApplicationData);
        };


        /**
         * @ngdoc method
         * @name startEdit
         * @methodOf module.applicationTableController
         * @description
         * cause to show edit panel
         * @param row (selected application)
         */
        thisAppController.startEdit=function(row){
            row.isEditing=true;
            row.backupName=row.name;
        };

        /**
         * @ngdoc method
         * @name commitEdit
         * @methodOf module.applicationTableController
         * @description
         * apply edit and save result on server
         * @param row (selected application)
         */
        thisAppController.commitEdit=function(row){
            //remove additional Data
            delete row.isEditing;
            delete row.backupName;
            //send edited data
            $userApplicationService.editApplication(row);
        };

        /**
         * @ngdoc method
         * @name cancelEdit
         * @methodOf module.applicationTableController
         * @description
         * rollback to origin data
         * @param row (selected application)
         */
        thisAppController.cancelEdit=function(row){
            row.name=row.backupName;
            row.isEditing=false;
        };


        /**
         * @ngdoc method
         * @name removeApplication
         * @methodOf module.applicationTableController
         * @description
         * get confirm and remove selected application
         * @param row (selected application)
         */
        thisAppController.removeApplication=function(row){
            var index = thisAppController.appCollection.indexOf(row);
            if (index !== -1) {
                thisAppController.appCollection.splice(index, 1);
            }
        };
    }]);