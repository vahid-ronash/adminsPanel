/**
 * Created by mojtaba on 3/14/16.
 */

/**
 * @ngdoc directive
 * @name app.directive.uiNav
 * @scope
 * @restrict E
 * @description
 * used to focus on input element automatically
 */
(function() {
  'use strict';
  angular
    .module('app')
    .directive('uiNav', function(){
      var directive = {
        restrict: 'AC',
        link: function(scope, el, attr){
          el.find('a').bind('click', function(e) {
            var li = angular.element(this).parent();
            var active = li.parent()[0].querySelectorAll('.active');
            li.toggleClass('active');
            angular.element(active).removeClass('active');
          });
        }
      };
      return directive;
    });
})();
