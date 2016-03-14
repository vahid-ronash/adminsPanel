/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc service
 * @name adminsPanel.service:installedResource
 * @description
 * it make connection between this app and server
 */
/*global angular */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('installedResource', ['$http', function ($http) {
            function InstalledService() {
                var thisService = this;

                /**
                 * @ngdoc method
                 * @name query
                 * @methodOf module.installedResource
                 * @description
                 * get installed list for pagination
                 * @param pageNumber indicate page to load
                 */
                thisService.query = function (pageNumber) {
                    var url = "/installed";
                    if (thisService.pageCount && pageNumber)url += "/page/" + pageNumber;
                    //so it will send to type of url
                    //1-/installed              :receive {list:[] , pageCount:12}
                    //2-/installed/page/index   :receive []
                    return $http.get(url).then(function (result) {
                        var resultData=result.data;
                        if (resultData.list){thisService.pageCount=resultData.pageCount;return resultData.list;}
                        else return resultData;
                    })
                };
            }

            return new InstalledService();
        }]);
})();