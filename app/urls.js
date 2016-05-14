/**
 * Created by mojtaba on 4/4/16.
 */

/**
 * @ngdoc function
 * @name app.constants:URLS
 * @description
 * determine URLS constants
 */
/*global angular */
((function() {
    'use strict';
    angular.module('app')
        .constant('URLS', {
            "URL_NOTIF": "api/v1/notifications/",
            "URL_GET_DASHBOARD_DATA":"api/v1/statistics/dashboard/",
            "URL_UPLOAD_ICON": "api/v1/images/",
            "URL_UPLOAD_IMAGE": "api/v1/images/",
            "URL_APP": "api/v1/applications/",
            "URL_INSTALLED": "api/v1/installations/",
            "URL_LOGIN":"api/v1/accounting/login/",
            "URL_REGISTER":"api/v1/accounting/",
            "URL_FORGOTPASS":"api/v1/accounting/reset_password/",
            "URL_CHANGE_PASS":"api/v1/accounting/change_password/",
            "URL_RESET_PASS_DONE":"api/v1/accounting/reset_password_done/",
            "URL_LOGOUT":"api/v1/accounting/logout/",
            "URL_GET_PROFILE":"api/v1/get_profile/",
            "URL_IMEI":"api/v1/favorites/",
            "URL_FAVED_INSTALLED":"api/v1/installations/favorites/",
        });
})());