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
        .controller('step5Controller', ['$scope', function ($scope) {
            var thisController=this;
            $scope.wizard.steps[5]={
                leave:function(){
                    if(thisController.aceSession) {
                        var value = thisController.aceSession.getDocument().getValue();
                        if (value.length > 0 && thisController.aceSession.getAnnotations().length > 0) {
                            $scope.wizard.error= $filter('translate')('JSON_INCORRECT');
                            return false;
                        }
                        else {
                            $scope.wizard.steps[5].data={custom_content: value};
                            return true;
                        }
                    }
                },
                enter:function(){
                    return true;
                },
                reset:function(){
                    if(thisController.aceSession)
                        thisController.aceSession.getDocument().setValue("");
                }
            };
            
            thisController.aceLoaded = function(_editor) {
                thisController.aceSession = _editor.getSession();
            };
        }]);
})());