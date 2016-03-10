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
angular
    .module('app')
    .service('userApplicationService', function ($resource) {
        return $resource('application/:id', {}, {
            // add update to actions (is not defined by default)
            update: {method:'PUT'}
        });
    });