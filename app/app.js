/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
/*global angular*/

var ngTranslate = require("angular-translate/angular-translate.js");
var uiBootstrap = require("angular-bootstrap/ui-bootstrap-tpls.min.js");
var ngAnimate = require("angular-animate/angular-animate.js");
var smartTable= require("angular-smart-table/dist/smart-table.js");
var ngResource = require("angular-resource/angular-resource.js");
var ngSanitize = require("angular-sanitize/angular-sanitize.js");
var ngTouch = require("angular-touch/angular-touch.js");
var uiSelect = require("ui-select/dist/select.js");

var shimUpload= require("ng-file-upload-shim/ng-file-upload-shim.min.js");
var ngFileUpload= require("ng-file-upload/ng-file-upload.min.js");

var ngRoute = require("angular-route/angular-route.js");
var ngMock = require("angular-mocks/angular-mocks.js");
var ngStorage = require("ngstorage/ngStorage.js");

var oclazyload= require("oclazyload/dist/ocLazyLoad.js");

    'use strict';
    angular
        .module('app', [
            'ngTranslate',
            // 'pascalprecht.translate',
            'uiBootstrap',
            // 'ui.bootstrap',
            'ngAnimate',
            // 'smart-table',
            'smartTable',
            'ngResource',
            'ngSanitize',//Sanitizes an html string by stripping all potentially dangerous tokens.
            'ngTouch',
            'uiSelect',
            // 'ui.select',
            'ngFileUpload',
            'ngRoute',
            //'ngStorage',
            // 'ngMock',
            //'ui.router',
            //'ui.utils',its depricated for angular ui
            //'ui.load',//a service that differ load css and script and lazyload
            //'ui.jp',//call function with options on dom
            'oc.lazyLoad'
        ]);

/*
    var router=require("config.router.js");
    var mock=require("mock.js");
    var controller=require("app-controller.js");
    var translate=require("translate.js");
    var focusDirective=require("shared/focusDirective.js");
    var homeController=require("home/homeController.js");

    var signinController=require("accountComponents/signIn/signinController.js");
    var signupController=require("accountComponents/signUp/signupController.js");
    var userMenuController=require("accountComponents/userMenu/userMenuController.js");
    var userMenuDirective=require("accountComponents/userMenu/userMenuDirective.js");
    var forgotPasswordController=require("accountComponents/forgotPassword/forgotPasswordController.js");
    var changePasswordController=require("accountComponents/changePassword/changePasswordController.js");
    var accountService=require("accountComponents/accountService.js");
    var sessionService=require("accountComponents/sessionService.js");

    var headerDirective=require("header/headerDirective.js");
    var userApplicationController=require("userApplications/userApplicationController.js");

    var applicationTableDirective=require("userApplications/applicationTable/applicationTableDirective.js");
    var applicationTableController=require("userApplications/applicationTable/applicationTableController.js");
    var applicationTableService=require("userApplications/applicationTable/applicationTableService.js");

    var installedController=require("installed/installedController.js");
    var installedTableController=require("installed/installedTable/installedTableController.js");
    var installTableDirective=require("installed/installedTable/installTableDirective.js");
    var installedTableService=require("installed/installedTable/installedTableService.js");

    var wizard=require("shared/sxWizardCopy/sx-wizard.js");
    var sxWizardDirective=require("shared/sxWizardCopy/sxWizardDirective.js");

    var notificationsController=require("notifications/notificationsController.js");
    var notificationTableController=require("notifications/notificationTable/notificationTableController.js");
    var notificationTableDirective=require("notifications/notificationTable/notificationTableDirective.js");
    var notificationTableService=require("notifications/notificationTable/notificationTableService.js");

    var step1Controller=require("notifications/notifWizardSteps/step1Controller.js");
    // var uiUtils = require("angular-ui-utils/ui-utils.js");
*/



