/**
 * Created by mojtaba on 5/1/16.
 */

/**
 * @ngdoc function
 * @name app.constants:DICS
 * @description
 * determine dictionaries constants
 */
/*global angular */
((function() {
    'use strict';
    angular.module('app')
        .constant('DICS', {
            "NOTIF_TYPE": {
                1:"test",
                2:"small",
                3:"bulk"
            },
            "NOTIF_NOTIFICATION_TYPE": {
                1:"notification",
                2:"data"
            },
            "NOTIF_STATUS": {
                '1':'CREATED',
                '2':'PROCESSING',
                '3':'INQUEUE',
                '4':'SENT',
                '5':'CANCELED'
            },
            "SEX":{
                'm':"men",
                'f':"female"
            },
            "BUTTON_ACTION":{},
            "NOTIF_ACTION":{},
            "BUTTON_ICONS":[]
        });
})());