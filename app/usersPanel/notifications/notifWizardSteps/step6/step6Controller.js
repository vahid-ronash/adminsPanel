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
                    var output={};
                    if(thisController.data.voice.isOn){output.sound_url=thisController.data.voice.selected.path}
                    if(thisController.data.LED.isOn){
                        output.led_color=thisController.data.LED.color;
                        output.led_off=500;
                        output.led_on=300;
                    }
                    output.wake_screen=thisController.data.screen.turnON;
                    output.time_to_live=thisController.data.timeToLive;
                    output.collapse_key=thisController.data.collapseKey;
                    output.delay_while_idle=thisController.data.delayWhileIdle;
                    $scope.wizard.steps[6].data=output;
                    return true;
                },
                enter:function(){
                    thisController.focusStart=true;
                    return true;
                },
                reset:function(){
                    thisController.vibrateTimes=["0.1","0.3","0.5","0.7"];

                    thisController.LEDTimes=[200,500,800,1000];
                    thisController.LEDColors=[{name:'yellow',value:-65535},{name:'red',value:-32155},{name:'green',value:-346215}];

                    thisController.voiceList=[
                        {name:"voice1",path:"assets/voices/voice1.mp3"},
                        {name:"voice2",path:"assets/voices/voice1.mp3"},
                        {name:"voice3",path:"assets/voices/voice1.mp3"},
                        {name:"voice4",path:"assets/voices/voice1.mp3"}
                    ];
                    thisController.timeToLiveList=[
                        {name:"1 day",value:60*60*24},
                        {name:"2 day",value:60*60*24*2},
                        {name:"3 day",value:60*60*24*3},
                        {name:"4 day",value:60*60*24*4},
                    ];
                    thisController.collapseStates=[
                        {name:"do not collapse",value:'do_not_collpase'},
                        {name:"key : one",value:'1'},
                        {name:"key : two",value:'2'},
                        {name:"key : three",value:'3'},
                    ];

                    thisController.data={
                        timeToLive:thisController.timeToLiveList[0].value,
                        collapseKey:"",
                        delayWhileIdle:false,
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
                            color:thisController.LEDColors[0].value,
                            offTime:thisController.LEDTimes[0],
                            onTime:thisController.LEDTimes[0]
                        }
                    };
                }
            };
            $scope.wizard.steps[6].reset();
        }]);
})());