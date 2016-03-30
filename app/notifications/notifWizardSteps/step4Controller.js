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
            var thisController=this;

            $scope.aceLoaded = function(_editor) {
                thisController.aceSession = _editor.getSession();
            };
            // get the value
            // var value=aceSession.getDocument().getValue();
        }]);
})());