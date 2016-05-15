/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step4Controller
 * @description
 * control notification wizard step 4
 * it show a ui to give 3 action button details
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('step4Controller', ['$scope', function ($scope) {
            var thisController=this;

            $scope.wizard.steps[4]={
                leave:function(){
                    $scope.wizard.steps[4].data=thisController.data;
                    return true;
                },
                enter:function(){
                    thisController.focusStart=true;
                    return true;
                },
                reset:function(){
                    thisController.data={
                        buttons:[]//buttons
                    };
                    thisController.maxButtonCount=3;
                    thisController.buttonList=[];
                    thisController.selectedIcon=thisController.icons[0];
                }
            };
            thisController.icons = [
                " --- ", "add_box", "airplanemode_active", "alarm", "announcement", "apps",
                "attach_money", "attach_file", "audiotrack", "build", "business", "call",
                "cancel", "card_giftcard", "chat", "check", "check_box", "close", "delete",
                "edit", "email", "event", "exit_to_app", "favorite", "file_download", "file_upload",
                "flag", "forward", "group", "help", "highlight_off", "history", "home", "image", "info",
                "language", "local_cafe", "local_dining", "local_offer", "loyalty", "map", "mood",
                "mood_bad", "notifications", "open_in_browser", "pause_circle_filled", "payment",
                "person", "phone_android", "photo_camera", "place", "poll", "reply", "save", "school",
                "search", "settings", "share", "shopping_basket", "shopping_cart", "sms", "star", "store", "sync",
                "thumb_down", "thumb_up", "view_list", "visibility", "visibility_off", "work"
            ];
            $scope.wizard.steps[4].reset();
            
            thisController.addAction=function(){
                if(thisController.data.buttons.length<thisController.maxButtonCount)
                    thisController.data.buttons.push({
                        btn_content: "",
                        btn_icon: "",
                        btn_action: ""
                    });
            };
            
            thisController.removeAction=function(index){
                thisController.data.buttons.splice(index,1);
            };
        }]);
})());