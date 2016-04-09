/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.notificationButtonController
 * @description
 * it shows all notification
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .controller('notificationButtonController', ['$scope', function ($scope) {
            var thisController = this;

            thisController.data=$scope.$data=angular.extend({
                btn_content: "",
                btn_icon: "",
                btn_action: ""
            },$scope.$data);

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
            thisController.selectedIcon=thisController.icons[0];
        }]);
})());