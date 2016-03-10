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
        thisAppController.isLoading = true;
        thisAppController.appCollection=$userApplicationService.query(function(success){
            thisAppController.isLoading = false;
        },function(err){
            //TODO : request it again
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
            $userApplicationService.save(newApplicationData,function(createdApplication){
                thisAppController.appCollection.push(createdApplication);
            },function(err){
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
            row.isEditing=false;
            //send edited data
            $userApplicationService.update({appId:row.id});
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
            //TODO:get confirm
            $userApplicationService.delete({appId:row.id}, function() {
                var index = thisAppController.appCollection.indexOf(row);
                thisAppController.appCollection.splice(index, 1);
                //alert('application ' + row.name + ' deleted');
            })
        };
    }]);