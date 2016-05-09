/**
 * Created by mojtaba on 3/29/16.
 */
/**
 * @ngdoc controller
 * @name app.controller.step5Controller
 * @description
 * control notification wizard step 5
 * enable user to write his json data
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('jsonStep1Controller', ['$scope', function ($scope) {
            var asThisController=$scope.jsonStep1Ctrl={};
            var contextData=$scope.$context.data;
            contextData.canSendNotification=true;
            var data = {
                "selectedApps": [{
                    "id": 1
                }],
                "title": "JSON Test",
                "content": "Small Text",
                "ticker": "Tickeeeeeeeeeeeeeeeeeeeeeer",
                "icon": "",
                "action": {
                    "action_type":"U",
                    "action_url":"http://pushe.co"
                },
                "big_tiltle": "BIG title",
                "big_content": "BIG Content",
                "summary": "summary",
                "buttons": [],
                "json": "",
                "sound_url": "",
                "led_color": -65574,
                "led_off": 300,
                "led_on": 200,
                "show_app": true,
                "delay_while_idle" : false,
                "collapse_key" : "demo"
            };
            $scope.$context.behavior.leaving = function(options, callback) {
                if(asThisController.aceSession) {
                    var value = asThisController.aceSession.getDocument().getValue();
                    if (value.length > 0 && asThisController.aceSession.getAnnotations().length > 0) {
                        callback(false);
                        $scope.$context.validationError = $filter('translate')('JSON_INCORRECT');
                    }
                    else {
                        contextData.jsonStepData[0] = {json: value};
                        callback(true);
                    }
                }
            };
            
            asThisController.aceLoaded = function(_editor) {
                asThisController.aceSession = _editor.getSession();
                _editor.setValue(JSON.stringify(data).replace(/,/g," ,\n\t").replace(/}/g,"\n}"));
            };
        }]);
})());