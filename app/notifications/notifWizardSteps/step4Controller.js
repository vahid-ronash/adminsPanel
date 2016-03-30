/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:step4Controller
 * @description
 * control notification wizard step 4
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step4Controller', ['$scope', function ($scope) {
            // var thisController=this;
            var asThisController=$scope.step4Ctrl={};

            asThisController.aceLoaded = function(_editor) {
                asThisController.aceSession = _editor.getSession();
            };
            // get the value and check validation
            // var annotList=asThisController.aceSession.getAnnotations();
            // if(annotList.length)asThisController.isvalid=false;
            // var value=aceSession.getDocument().getValue();
        }]);
})());