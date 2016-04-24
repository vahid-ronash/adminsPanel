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
                "title": "dddd",
                "content": "sdvsdvsdvsdvsdvsd",
                "ticker": "",
                "icon": "",
                "action": {},
                "big_tiltle": "ffdsfgvsddf",
                "big_content": "fdsgsfdg",
                "summary": "sdfgsfdgsdfgsdf",
                "buttons": [],
                "json": "",
                "screen": {"turnON": false},
                "voice": {
                    "isOn": false,
                    "selected": {"name": "voice1", "path": "assets/voices/voice1.mp3"}
                },
                "vibrate": {"isOn": false, "offTime": "0.1", "onTime": "0.1"},
                "LED": {"isOn": false, "color": "yellow", "offTime": "0.2", "onTime": "0.2"},
                "contacts": [{"text": "356938035643809"}, {"text": "651956116541"}],
                "visibility": true
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