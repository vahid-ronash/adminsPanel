/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc service
 * @name adminsPanel.service:applicationTableService
 * @description
 * it make connection between this app and server
 */
/*global angular */
angular.service('userApplicationService', function ($resource) {
    return $resource('application/:appId', {}, {
        // add update to actions (is not defined by default)
        update: {method:'PUT'}
    });
});