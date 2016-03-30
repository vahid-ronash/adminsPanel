/**
 * Created by mojtaba on 3/30/16.
 */
/**
 * @ngdoc controller
 * @name adminsPanel.controller:step5Controller
 * @description
 * control notification wizard step 5
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step5Controller', ['$scope', function ($scope) {
            // var thisController=this;
            var asThisController=$scope.step5Ctrl={};

            asThisController.vibrateTimes=["0.1","0.3","0.5","0.7"];
            asThisController.vibrate={
                offTime:asThisController.vibrateTimes[0],
                onTime:asThisController.vibrateTimes[0],
                isOn:false
            };

            asThisController.showLEDController=false;
            asThisController.LEDTimes=["0.2","0.5","0.6","0.9","1","1.5"];
            asThisController.LEDColors=['yellow','red','green'];
            asThisController.LED={
                color:asThisController.LEDColors[0],
                offTime:asThisController.LEDTimes[0],
                onTime:asThisController.LEDTimes[0]
            };

        }]);
})());