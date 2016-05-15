/**
 * Created by mojtaba on 5/8/16.
 */

/**
 * @ngdoc filter
 * @name app.filter.jalali
 * @description
 * convert time to jalali moment
 */
/*global angular */
((function () {
    'use strict';
    angular
        .module("app")
        .filter('jalali', function () {
            return function(input){
                try {
                    var d = new Date(input);
                    return moment(d).format('jYYYY/jM/jD');
                }
                catch(e){
                    console.log()
                }
            };
        });
})());