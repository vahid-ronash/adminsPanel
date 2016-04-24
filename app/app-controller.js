/**
 * @ngdoc function
 * @name app.controller.AppCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
/*global angular */
((function() {
  'use strict';
  angular
      .module("app")
      .controller("AppCtrl",
                ["$scope","$rootScope","AuthService",// "$localStorage", "$location", "$rootScope", "$anchorScroll", "$timeout", "$window",
        function ($scope,$rootScope,$AuthService) {//, $localStorage, $location, $rootScope, $anchorScroll, $timeout, $window
          var thisScope = $scope;

          //TODO:why they dont use modernizer.js?
          thisScope.isIE = function() {
            return !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./);
          };
          //thisScope.isSmart = function(){
          //  // Adapted from http://www.detectmobilebrowsers.com
          //  var ua = $window["navigator"]["userAgent"] || $window["navigator"]["vendor"] || $window["opera"];
          //  // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          //  return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
          //};


            // $rootScope.serverAddress="http://192.168.1.183:8080";
            $rootScope.serverAddress="";
            $rootScope.alertMSGS=[];
            $scope.closeAlert = function(index) {
                $scope.alertMSGS.splice(index, 1);
            };
            $rootScope.handleError=function(data){
                //TODO:if user was exited from server and we save it on localstorage
                // if(data.status == 403 && data.data && data.data.detail){//&& data.data.detail===""
                //     $AuthService.logout();
                // }
                if(typeof data.data==="object") {
                    for (var title in data.data) {
                        var text = data.data[title];
                        if (typeof text !== "string")text = text.join("\n");
                        if (data.data.hasOwnProperty(title)) {
                            var newAlert = {
                                title: title,
                                text: text,
                                verbose: JSON.stringify(data)
                            };

                            if ($rootScope.ErrorContent && $rootScope.ErrorContent.hasOwnProperty("err"))
                                return {error: newAlert};
                            else
                                $scope.alertMSGS.push(newAlert);
                        }
                    }
                }
                else {
                    if(data.data) {
                        $scope.alertMSGS.push({title: "Error", text: data.data});
                        if (data.data.indexOf("Time-out")) {

                        }
                    }
                    else
                        $scope.alertMSGS.push({title: "wrong Error", text: JSON.stringify(data)});
                }
            };
          // TODO : is there any config to save in user browser?
          thisScope.app = {
            name: "adminsPanel",
            version: "1.1.0"//,
            // for chart colors
            //color: {
            //  "primary":      "#0cc2aa",
            //  "accent":       "#a88add",
            //  "warn":         "#fcc100",
            //  "info":         "#6887ff",
            //  "success":      "#6cc788",
            //  "warning":      "#f77a99",
            //  "danger":       "#f44455",
            //  "white":        "#ffffff",
            //  "light":        "#f1f2f3",
            //  "dark":         "#2e3e4e",
            //  "black":        "#2a2b3c"
            //},
            //setting: {
            //  theme: {
            //    primary: "primary",
            //    accent: "accent",
            //    warn: "warn"
            //  },
            //  folded: false,
            //  boxed: false,
            //  container: false,
            //  themeID: 1,
            //  bg: ""
            //}
          };
          //var localStoreKeyName = thisScope.app.name+"-Setting";
          //// save settings to local storage
          //if ( angular.isDefined($localStorage[localStoreKeyName]) ) {
          //  thisScope.app.setting = $localStorage[localStoreKeyName];
          //} else {
          //  $localStorage[localStoreKeyName] = thisScope.app.setting;
          //}
          // watch changes
          //$scope.$watch("app.setting", function(){
          //  $localStorage[localStoreKeyName] = thisScope.app.setting;
          //}, true);



          //TODO:is it necessary?i dont think
          //get query string parameters
          //function getParams(name) {
          //  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          //  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          //      results = regex.exec(location.search);
          //  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          //}
          //getParams("bg") && (thisScope.app.setting.bg = getParams("bg"));



          //TODO:will we offer theme choosing for user ? is it necessary? i don't think
          //private color property
          //function getColor(name){
          //  return thisScope.app.color[ name ] ? thisScope.app.color[ name ] : palette.find(name);//TODO:pallete is undefined now because we dont import pallete
          //}
          //function setColor(){
          //  thisScope.app.setting.color = {
          //    primary: getColor(thisScope.app.setting.theme.primary),
          //    accent: getColor(thisScope.app.setting.theme.accent),
          //    warn: getColor(thisScope.app.setting.theme.warn)
          //  };
          //}
          //set theme by setting which save in localStorage
          //thisScope.setTheme = function(theme){
          //  thisScope.app.setting.theme = theme.theme;
          //  setColor();
          //  if(theme.url){
          //    $timeout(function() {
          //      $window.location.href = theme.url;
          //    }, 100, false);
          //  }
          //};
          //setColor();



          //TODO:it should manage by ng-router
          //$rootScope.$on("$stateChangeSuccess", function openPage() {
          //  // goto top
          //  $location.hash("content");
          //  $anchorScroll();
          //  $location.hash("");
          //  // hide open menu
          //  $("#aside").modal("hide");
          //  $("body").removeClass("modal-open").find(".modal-backdrop").remove();
          //  $(".navbar-toggleable-sm").collapse("hide");
          //});
          //thisScope.goBack = function () {
          //  $window.history.back();
          //};
        }
      ]);
})());
