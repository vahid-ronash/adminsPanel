/**
 * Created by mojtaba on 4/4/16.
 */

/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
/*global angular $ */
((function() {
    'use strict';
    angular.module('app')
        .constant('URLS', {
            "URL_NOTIF": "api/notification/notifications/",
            "URL_APP": "api/platform/applications/",
            "URL_INSTALLED": "api/platform/installations/",
        });
})());