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
/*global angular */
((function() {
    'use strict';
    angular.module('app')
        .constant('URLS', {
            "URL_NOTIF": "api/notification/notifications/",
            "URL_UPLOAD_ICON": "api/notification/images/",
            "URL_UPLOAD_IMAGE": "api/notification/images/",
            "URL_APP": "api/platform/applications/",
            "URL_INSTALLED": "api/platform/installations/",
            "URL_LOGIN":"api/accounting/login/",
            "URL_REGISTER":"api/accounting/",
            "URL_FORGOTPASS":"api/accounting/reset_password/",
            "URL_CHANGE_PASS":"api/accounting/changePassword/",
            "URL_RESET_PASS_DONE":"api/accounting/reset_password_done/",
            "URL_LOGOUT":"api/accounting/logout/"
        });
})());