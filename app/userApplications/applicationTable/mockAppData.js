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
        .module('app')//,['ngMockE2E']
        .config(function($provide) {
            $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
        })
        .run(function($httpBackend) {
            $httpBackend.whenGET('/userApp').respond(function(method, url, data, headers){
                return [200, appList, {}];
            });
            $httpBackend.whenPUT('/userApp').respond(function(method, url, data, headers){
                var dataobj=angular.fromJson(data);
                appList[data.id-1]=dataobj;
                return [200, dataobj, {}];
            });
            //mock has problem with /userApp/:id expression so we just can delete id=1
            $httpBackend.whenDELETE('/userApp/1').respond({success:true});
            $httpBackend.whenPOST('/userApp').respond(function(method, url, data, headers){
                var dataobj=angular.fromJson(data);
                var newData=angular.extend({id:appList.length+1},dataobj);
                appList.push(newData);
                return [200, data, {}];
            });

            //$httpBackend.whenGET(/.*/).passThrough();
            //$httpBackend.whenPOST(/.*/).passThrough();
            //$httpBackend.whenDELETE(/.*/).passThrough();
            //$httpBackend.whenPUT(/.*/).passThrough();
            $httpBackend.whenGET(/\.html/).passThrough();
        });
})());