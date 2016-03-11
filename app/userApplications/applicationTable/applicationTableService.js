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
((function() {
    'use strict';
    angular
        .module('app')
        .factory('applicationResource', ['$resource', function ($resource) {
            return $resource('/userApp/:id', {id:'@id'}, {
                    // add update to actions (is not defined by default)
                    'update': {method: 'PUT'},
                    'query': {method: 'GET', isArray: true}
                }
            );
        }]);
})());