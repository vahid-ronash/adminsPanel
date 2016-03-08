/**
 * @ngdoc function
 * @name app.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */

(function() {
    'use strict';
    angular
      .module('app')
      .controller('AppCtrl', AppCtrl);

      AppCtrl.$inject  = ['$scope', '$localStorage', '$location', '$rootScope', '$anchorScroll', '$timeout', '$window'];

      function AppCtrl($scope, $localStorage, $location, $rootScope, $anchorScroll, $timeout, $window) {
        var thisScope = $scope;
        thisScope.isIE = isIE();
        thisScope.isSmart = isSmart();
        // config
        thisScope.app = {
          name: 'adminsPanel',
          version: '1.1.0',
          // for chart colors
          color: {
            'primary':      '#0cc2aa',
            'accent':       '#a88add',
            'warn':         '#fcc100',
            'info':         '#6887ff',
            'success':      '#6cc788',
            'warning':      '#f77a99',
            'danger':       '#f44455',
            'white':        '#ffffff',
            'light':        '#f1f2f3',
            'dark':         '#2e3e4e',
            'black':        '#2a2b3c'
          },
          setting: {
            theme: {
              primary: 'primary',
              accent: 'accent',
              warn: 'warn'
            },
            folded: false,
            boxed: false,
            container: false,
            themeID: 1,
            bg: ''
          }
        };

        var setting = thisScope.app.name+'-Setting';
        // save settings to local storage
        if ( angular.isDefined($localStorage[setting]) ) {
          thisScope.app.setting = $localStorage[setting];
        } else {
          $localStorage[setting] = thisScope.app.setting;
        }
        // watch changes
        $scope.$watch('app.setting', function(){
          $localStorage[setting] = thisScope.app.setting;
        }, true);

        getParams('bg') && (thisScope.app.setting.bg = getParams('bg'));

        thisScope.setTheme = setTheme;
        setColor();
        
        function setTheme(theme){
          thisScope.app.setting.theme = theme.theme;
          setColor();
          if(theme.url){
            $timeout(function() {
              $window.location.href = theme.url;
            }, 100, false);
          }
        };

        function setColor(){
          thisScope.app.setting.color = {
            primary: getColor(thisScope.app.setting.theme.primary),
            accent: getColor(thisScope.app.setting.theme.accent),
            warn: getColor(thisScope.app.setting.theme.warn)
          };
        };

        function getColor(name){
          return thisScope.app.color[ name ] ? thisScope.app.color[ name ] : palette.find(name);
        };

        $rootScope.$on('$stateChangeSuccess', openPage);

        function openPage() {
          // goto top
          $location.hash('content');
          $anchorScroll();
          $location.hash('');
          // hide open menu
          $('#aside').modal('hide');
          $('body').removeClass('modal-open').find('.modal-backdrop').remove();
          $('.navbar-toggleable-sm').collapse('hide');
        };

        thisScope.goBack = function () {
          $window.history.back();
        };

        function isIE() {
          return !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./);
        }

        function isSmart(){
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        function getParams(name) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(location.search);
          return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

      }
})();
