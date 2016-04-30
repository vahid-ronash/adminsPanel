/**
 * Created by mojtaba on 3/30/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step6Controller
 * @description
 * control notification wizard step 6
 * it determine notifications alert things(LED, voice , vibrate , screen)
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step6Controller', ['$scope', function ($scope) {
            var thisController=this;
            $scope.wizard.steps[6]={
                leave:function(){
                    $scope.wizard.steps[6].data=thisController.data;
                    return true;
                },
                enter:function(){
                    thisController.focusStart=true;
                    return true;
                },
                reset:function(){
                    thisController.vibrateTimes=["0.1","0.3","0.5","0.7"];

                    thisController.LEDTimes=["0.2","0.5","0.6","0.9","1","1.5"];
                    thisController.LEDColors=['yellow','red','green'];

                    thisController.voiceList=[
                        {name:"voice1",path:"assets/voices/voice1.mp3"},
                        {name:"voice2",path:"assets/voices/voice2.mp3"},
                        {name:"voice3",path:"assets/voices/voice3.mp3"},
                        {name:"voice4",path:"assets/voices/voice4.mp3"}
                    ];

                    thisController.data={
                        screen:{//wake_screen
                            turnON:false
                        },
                        voice:{
                            isOn:false,
                            selected:thisController.voiceList[0]
                        },
                        vibrate:{
                            isOn:false,
                            offTime:thisController.vibrateTimes[0],
                            onTime:thisController.vibrateTimes[0]
                        },
                        LED:{
                            isOn:false,
                            color:thisController.LEDColors[0],
                            offTime:thisController.LEDTimes[0],
                            onTime:thisController.LEDTimes[0]
                        }
                    };
                }
            };
            $scope.wizard.steps[6].reset();
        }]);
})());