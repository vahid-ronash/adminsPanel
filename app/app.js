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
  angular
      .module('app', [
        'ngAnimate',
        'ngResource',
        'ngSanitize',//Sanitizes an html string by stripping all potentially dangerous tokens.
        'ngTouch',
        'ui.bootstrap',
        //'sx.wizard',
        //'ngStorage',
        //'ngStore',//override some method on ngStorage
        'ngRoute',
        'pascalprecht.translate',
        'smart-table',
        //'ui.router',
        //'ui.utils',its depricated for angular ui
        //'ui.load',//a service that differ load css and script and lazyload
        //'ui.jp',//call function with options on dom
        'oc.lazyLoad'
      ]);
})());
