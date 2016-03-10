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
    angular
        .module('app')
        // get executed after the injector is created and are used to kickstart the application.
        // Only instances and constants can be injected into run blocks.
        // This is to prevent further system configuration during application run time.
        .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }])
        .config(['$stateProvider', '$urlRouterProvider' , //'MODULE_CONFIG',
            function config( $stateProvider,   $urlRouterProvider) {//,   MODULE_CONFIG ) {

                // if the path doesn't match any of the urls you configured
                // otherwise will take care of routing the user to the specified url
                $urlRouterProvider.otherwise('/home');

                //config urls and their state names
                $stateProvider
                     .state('home', {
                        url: '/home',
                        templateUrl: 'app/home/home.html',
                        controller: 'homeController',
                        controllerAs: 'home'
                        //resolve: lazyLoadDependencies(['scripts/controllers/chart.js'])//to load libraries by lazyload in controllers
                    })
                    .state('app.page.profile', {
                        url: '/profile',
                        templateUrl: '../views/page/profile.html',
                        data : { title: 'Profile' }
                    })
                    .state('404', {
                        url: '/404',
                        templateUrl: '../views/misc/404.html'
                    })
                    .state('505', {
                        url: '/505',
                        templateUrl: '../views/misc/505.html'
                    })
                    .state('access.signin', {
                        url: '/signin',
                        templateUrl: '../views/misc/signin.html'
                    })
                    .state('access.signup', {
                        url: '/signup',
                        templateUrl: '../views/misc/signup.html'
                    })
                    .state('access.forgot-password', {
                        url: '/forgot-password',
                        templateUrl: '../views/misc/forgot-password.html'
                    });

                /* function lazyLoadDependencies(srcs, callback) {
                    return {
                        deps: ['$ocLazyLoad', '$q',
                            function( $ocLazyLoad, $q ){
                                var deferred = $q.defer();
                                var promise  = false;
                                srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                                if(!promise){
                                    promise = deferred.promise;
                                }
                                angular.forEach(srcs, function(src) {
                                    promise = promise.then( function(){
                                        angular.forEach(MODULE_CONFIG, function(module) {
                                            if( module.name == src){
                                                src = module.module ? module.name : module.files;
                                            }
                                        });
                                        return $ocLazyLoad.load(src);
                                    } );
                                });
                                deferred.resolve();
                                return callback ? promise.then(function(){ return callback(); }) : promise;
                            }]
                    }
                }*/
            }]);
})());
