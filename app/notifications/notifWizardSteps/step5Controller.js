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

            var contextData=$scope.$context.data;
            $scope.$context.behavior.leaving = function(options, callback) {
                contextData.stepData[5]=asThisController.data;
                callback(true);
            };

            asThisController.vibrateTimes=["0.1","0.3","0.5","0.7"];

            asThisController.LEDTimes=["0.2","0.5","0.6","0.9","1","1.5"];
            asThisController.LEDColors=['yellow','red','green'];

            asThisController.voiceList=[
                {name:"voice1",path:"assets/voices/voice1.mp3"},
                {name:"voice2",path:"assets/voices/voice2.mp3"},
                {name:"voice3",path:"assets/voices/voice3.mp3"},
                {name:"voice4",path:"assets/voices/voice4.mp3"}
            ];

            asThisController.data={
                screen:{
                    turnON:false
                },
                voice:{
                    isOn:false,
                    selected:asThisController.voiceList[0]
                },
                vibrate:{
                    isOn:false,
                    offTime:asThisController.vibrateTimes[0],
                    onTime:asThisController.vibrateTimes[0]
                },
                LED:{
                    isOn:false,
                    color:asThisController.LEDColors[0],
                    offTime:asThisController.LEDTimes[0],
                    onTime:asThisController.LEDTimes[0]
                }
            };
        }]);
})());