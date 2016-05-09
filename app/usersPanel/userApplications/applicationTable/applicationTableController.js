/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.applicationTableController
 * @description
 * it can do CRUD on user's applications by using smartTable
 */
/*global angular moment saveAs */
((function() {
    'use strict';
    angular
        .module("app")
        .controller('applicationTableController', ['$scope', 'applicationResource','$filter', function ($scope, $applicationResource,$filter) {
            var thisController = this;

            thisController.manifest={};
            thisController.loadManifests=function() {
                function loadManifest(fileName,keyName){
                    var androidManifestLoader = new XMLHttpRequest();
                    androidManifestLoader.open('GET', '/assets/pushe-manifests/'+fileName+'.xml');
                    androidManifestLoader.onreadystatechange = function () { thisController.manifest[keyName]=androidManifestLoader.responseText; };
                    androidManifestLoader.send();
                }
                loadManifest('android_studio_manifest','androidStudio');
                loadManifest('eclipse_manifest','eclipse');
                loadManifest('b4a_manifest','basic4android');
                loadManifest('unity_manifest','unity');
                loadManifest('Token','joapp');
            };
            thisController.loadManifests();

            thisController.showManifestDialog=function(row){
                thisController.selectedRow=row;
                thisController.manifestDialog.open();
                if(!row.senderID) {
                    $applicationResource.getSenderID(row.application_id, function (newrow) {
                        row.senderID = JSON.parse(newrow.data.credentials).node;
                    });
                }
            };

            thisController.providers=[
                {name:"android studio",value:"androidStudio"},
                {name:"eclipse",value:"eclipse"},
                {name:"basic 4 android",value:"basic4android"},
                {name:"unity",value:"unity"},
                {name:"joapp",value:"joapp"}
            ];
            /**
             * @ngdoc method
             * @name downloadManifest
             * @methodOf app.controller.applicationTableController
             * @description
             * get confirm and remove selected application
             */
            thisController.downloadManifest = function () {
                var provider=thisController.selectedProvider;
                var manifest_copy=thisController.manifest[provider].slice(0);
                manifest_copy=manifest_copy.replace(/TOKEN/g,thisController.selectedRow.senderID);
                manifest_copy=manifest_copy.replace(/PACKAGE_NAME/g,thisController.selectedRow.application_id);
                var blob = new Blob([manifest_copy], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "manifest_"+provider+".xml");
                thisController.manifestDialog.close();
            };
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
            thisController.rowInPage=6;
            thisController.displayedPage=1;
            thisController.callServer=function(tableState){

                //TO fix bug two times loading
                tableState.pagination.number = tableState.pagination.number || thisController.rowInPage;
                tableState.pagination.start = tableState.pagination.start || 0;

                tableState.pagination.numberOfPages = 1;
                thisController.isLoading = true;
                var pagination = tableState.pagination;

                var filters={
                    offset:pagination.start*thisController.rowInPage || 0,
                    limit:pagination.number || thisController.rowInPage
                };
                if(tableState.sort.predicate){
                    filters.ordering=(tableState.sort.reverse?"-":"")+tableState.sort.predicate;
                }

                filters=angular.extend(filters,tableState.search.predicateObject);

                return $applicationResource.query(filters).then(function (result) {
                    if(result) {
                        thisController.displayed = result.data.results;
                        if(result.data.previous)thisController.hasPrevious=true;
                        if(result.data.next)thisController.hasNext=true;
                        if(thisController.hasNext) tableState.pagination.numberOfPages=Math.ceil(pagination.start/pagination.number)+2;
                        
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
            thisController.selected4Remove=0;
            thisController.removeApplication = function (row) {
                thisController.selected4Remove=row;
                thisController.confirmRemoveDialog.open();
            };

            thisController.sendRemoveApplication = function () {
                $applicationResource.delete(thisController.selected4Remove.application_id, function () {
                    var index = thisController.displayed.indexOf(thisController.selected4Remove);
                    thisController.displayed.splice(index, 1);
                    $scope.$root.handleError({localError:{type:'danger',text:$filter('translate')('SUCCESS_DELETE'),title:$filter('translate')('DELETE')}});
                    // callback && callback();
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
                if(row.showDetail){row.showDetail=false;}
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