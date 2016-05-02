/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
/*global angular*/
((function() {
  'use strict';
})());
angular
    .module('app', [
        'ngAnimate',
        'ngStorage',
        'ngSanitize',//Sanitizes an html string by stripping all potentially dangerous tokens.
        'ngTouch',
        'ui.bootstrap',
        //'sx.wizard',
        //'ngStorage',
        //'ngStore',//override some method on ngStorage
        'ui.router',
        'mdl',
        // 'ngMessages',
        'pascalprecht.translate',
        'smart-table',
        'chiefy.detect-caps-lock',
        'ui.select',
        'ngTagsInput',
        'ngFileUpload',
        'ngImgCrop',
        'app.config',
        'noCAPTCHA',
        //'ui.router',
        //'ui.utils',its depricated for angular ui
        //'ui.load',//a service that differ load css and script and lazyload
        //'ui.jp',//call function with options on dom
        // 'oc.lazyLoad',
        'ui.ace'
    ]);
