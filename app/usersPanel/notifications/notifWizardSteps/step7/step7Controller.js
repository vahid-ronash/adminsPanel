/**
 * Created by mojtaba on 3/30/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step7Controller
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
            var thisController=this;
            $scope.wizard.steps[7]={
                leave:function(){
                    $scope.wizard.steps[7].data=thisController.data;
                    return true;
                },
                enter:function(){
                    return true;
                },
                reset:function(){
                    thisController.selectedFavorites =["356938035643809","651956116541","3213521651"];
                }
            };
            $scope.wizard.steps[7].reset();

            //TODO: it should add to tagging: but it has bug now and its solved some days ago and we can install latest version
            thisController.isIMEI=function(newTag){
                var imeiInput=newTag.text;
                var etal = /^[0-9]{15}$/;
                if (!etal.test(imeiInput))
                    return false;
                else {
                    var sum = 0, mul = 2, l = 14;
                    for (var i = 0; i < l; i++) {
                        var digit = imeiInput.substring(l - i - 1, l - i);
                        var tp = parseInt(digit, 10) * mul;
                        if (tp >= 10)
                            sum += (tp % 10) + 1;
                        else
                            sum += tp;
                        if (mul == 1)
                            mul++;
                        else
                            mul--;
                    }
                    var chk = ((10 - (sum % 10)) % 10);
                    return chk == parseInt(imeiInput.substring(14, 15), 10);
                }
            };
            thisController.loadTags=function(){};
        }]);
})());