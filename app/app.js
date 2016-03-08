/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
/*global angular*/
(function() {
    'use strict';
    angular
      .module('app', [
        'ngAnimate',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ngStorage',
        //'ngStore',//override some method on ngStorage
        'ui.router',
        'ui.utils',
        //'ui.load',//a service that differ load css and script and lazyload
        //'ui.jp',//call function with options on dom
        'oc.lazyLoad'
      ]);
})();
