/**
 * Created by mojtaba on 3/16/16.
 */

/**
 * @ngdoc directive
 * @name app.directive.sxWizard
 * @scope
 * @restrict E
 * @description
 * its a component that manage some pages and make suitable data
 */

/*global angular */
((function() {
    'use strict';
angular
    .module('app')
    .directive('sxWizard', ['$compile', '$controller',
    function($compile, $controller) {
        return {
            scope: {
                $data: '=sxWizard',
                $steps: '=sxWizardSteps',
                $current: '=sxWizardCurrentStep',
                $init: '&sxWizardInit',
                $showShadow: '&sxWizardShowShadow',
                $hideShadow: '&sxWizardHideShadow'
            },
            link: function(scope, element, attributes, controllers) {
                var _stepElements = [];
                var _steps = {};
                window.angular.forEach(scope.$steps, function(step, id) {
                    _steps[id] = {
                        id: id,
                        title: step.title
                    };
                });

                window.angular.forEach(scope.$steps, function(step, id) {
                    var template = step.template;
                    var controller = step.controller;
                    var templateScope = scope.$new();
                    templateScope.$context = {
                        data: scope.$data,
                        parameters: step.parameters,
                        steps: _steps,
                        currentStepId: scope.$current.step && scope.$current.step.id,
                        navigation: {
                            showFinish: false,
                            nextStepId: null,
                            buttons: []
                        },
                        behavior: {
                            shadow: function (isLeaving, fn) {
                                try {
                                    scope.$showShadow(isLeaving);
                                    return fn(function () {
                                        scope.$hideShadow();
                                    });
                                }
                                catch (_) {
                                    scope.$hideShadow();
                                }
                            },
                            entering: function(options, callback) {
                                return callback();
                            },
                            leaving: function(options, callback) {
                                return callback(true);
                            }
                        }
                    };
                    step.$controller = $controller(controller, {
                        $scope: templateScope
                    });
                    step.$context = templateScope.$context;
                    step.entered = false;
                    element.append(template);
                    var templateElement = element.find('[sx-wizard-step-id="' + id + '"]');
                    $compile(templateElement.contents())(templateScope);
                    _stepElements.push(templateElement);
                });

                scope.$watch('$current.step', function(step) {
                    if (step) {
                        window.angular.forEach(_stepElements, function(stepElement) {
                            if (stepElement.attr('sx-wizard-step-id') === step.id) {
                                stepElement.show();
                            }
                            else {
                                stepElement.hide();
                            }
                        });
                    }
                });

                scope.$init();
            }
        };
    }
]);

})());