/**
 * Created by mojtaba on 3/10/16.
 */
/*global angular */
((function() {
    'use strict';
    var appList = [
        {id:1,name: 'Pushe Sample Eclipse', packname:'co.ronash.pushesampleeclipse'},
        {id:2,name: 'Pushe Sample Android Studio', packname:'co.ronash.pushesampleas'},
        {id:3,name: 'Pushe Sample Unity', packname:'co.ronash.pushesampleunity'},
        {id:4,name: 'Pushe Sample B4A', packname:'co.ronash.pushesampleb4a'},
        {id:5,name: 'دموی پوشه', packname:'co.ronash.pushesample'},
    ];
    angular
        .module('app')
        .config(function($provide) {
            $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
        })
        .run(function($httpBackend) {
            $httpBackend.whenGET('/application').respond(function(method, url, data, headers){
                return [200, appList, {}];
            });
            $httpBackend.whenPUT('/application/:id').respond({success:true});
            $httpBackend.whenDELETE('/application/:id').respond({success:true});
            $httpBackend.whenPOST('/application').respond(function(method, url, data, headers){
                data.id=appList.length+1;
                appList.push(angular.fromJson(data));
                return [200, data, {}];
            });
        });
})());