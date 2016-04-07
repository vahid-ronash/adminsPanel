/**
 * Created by mojtaba on 3/30/16.
 */
/**
 * @ngdoc controller
 * @name app.controllers.step7Controller
 * @description
 * control notification wizard step 7
 * it will filters contacts
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step7Controller', ['$scope', function ($scope) {
            // var thisController=this;
            var asThisController=$scope.step7Ctrl={};

            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                contextData.stepData[6]={contacts:asThisController.selectedFavorites};
                callback(true);
            };

            asThisController.selectedFavorites =["356938035643809","651956116541","3213521651"];
            //TODO: it should add to tagging: but it has bug now and its solved some days ago and we can install latest version
            asThisController.isIMEI=function(newTag){
                var imeiInput=newTag.text;
                var etal = /^[0-9]{15}$/;
                if (!etal.test(imeiInput))
                    return false;
                var sum = 0, mul = 2, l = 14;
                for (var i = 0; i < l; i++) {
                    var digit = imeiInput.substring(l-i-1,l-i);
                    var tp = parseInt(digit,10)*mul;
                    if (tp >= 10)
                        sum += (tp % 10) +1;
                    else
                        sum += tp;
                    if (mul == 1)
                        mul++;
                    else
                        mul--;
                }
                var chk = ((10 - (sum % 10)) % 10);
                return chk == parseInt(imeiInput.substring(14, 15), 10);
            };
            asThisController.loadTags=function(){};
        }]);
})());