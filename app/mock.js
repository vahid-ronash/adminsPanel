/**
 * Created by mojtaba on 3/10/16.
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .config(function($provide,EnvironmentConfig) {
            if(EnvironmentConfig.mode=="production")return true;
            $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
        })
        .run(function($httpBackend,$filter,$rootScope,EnvironmentConfig,URLS) {
            if(EnvironmentConfig.mode=="production")return true;
            $rootScope.serverAddress="";
            var appList = [
                {id:1,name: 'Pushe Sample Eclipse', packname:'co.ronash.pushesampleeclipse'},
                {id:2,name: 'Pushe Sample Android Studio', packname:'co.ronash.pushesampleas'},
                {id:3,name: 'Pushe Sample Unity', packname:'co.ronash.pushesampleunity'},
                {id:4,name: 'Pushe Sample B4A', packname:'co.ronash.pushesampleb4a'},
                {id:5,name: 'دموی پوشه', packname:'co.ronash.pushesample'}
            ];
            $httpBackend.whenGET(URLS.URL_APP).respond(appList);
            $httpBackend.whenPUT(URLS.URL_APP).respond({success:true});
            //mock has problem with /userApp/:id expression so we just can delete id=1
            function getRegex(path,append){
                return new RegExp(path.replace(new RegExp("/","g"),"\\/")+append);
            }
            $httpBackend.whenDELETE(getRegex(URLS.URL_APP,"\\d")).respond({success:true});
            $httpBackend.whenPOST(URLS.URL_APP).respond(function(method, url, data){
                var dataobj=angular.fromJson(data);
                var newData=angular.extend({id:appList.length+1},dataobj);
                appList.push(newData);
                return [200, newData, {}];
            });


            var userList = [
                {id:1,name: 'دمو', email:'demo@pushe.co',password:"1234",roles:[]},
                {id:2,name: 'دمو', email:'a@a.cc',password:"a",roles:[]}
            ];
            $httpBackend.whenGET('/accounting/logout').respond({success:true});
            $httpBackend.whenPOST('/accounting/login').respond(function(method, url, data){
                var dataobj=angular.fromJson(data);
                var list=userList.filter(function(user){ return (user.email===dataobj.email && user.password===dataobj.password); });
                if(list.length){
                    var user={user:angular.extend({sessionId:1},list[0])};
                    return [200, user, {}];
                }
                else {
                    return [200, {error:"username or password is wrong"}, {}];
                }
            });
            $httpBackend.whenPOST('/forgotPassword').respond({success:true});
            $httpBackend.whenPOST('/changePassword').respond({success:true});
            $httpBackend.whenPOST('/register').respond(function(method, url, data){
                var dataobj=angular.fromJson(data);
                var list=userList.filter(function(user){ return (user.email===dataobj.email); });
                if(!list.length){
                    var newData=angular.extend({id:appList.length+1},dataobj);
                    userList.push(newData);
                    return [200, {success:true}, {}];
                }
                else{
                    return [200, {error:"username is taken before"}, {}];
                }
            });

            $httpBackend.whenPOST('/uploadIconImage').respond(function(method, url, data){
                    return [200, {success:true}, {}];
            });

            var randomsItems = [];
            function createRandomItem(id) {
                var apps = ['Pushe Sample B4A', 'Pushe Sample B4A', 'دموی پوشه', 'Pushe Sample Unity', 'Pushe Sample Eclipse'];
                return {
                    id: id,
                    application: apps[Math.floor(Math.random() * apps.length)],
                    device: Math.floor(Math.random() * 10000000),
                    installTime: Math.floor(Math.random() * 10000),
                    lastSeen: Math.floor(Math.random() * 10000),
                    test:'/platform/notify/'+Math.floor(Math.random() * 1000000)+'/'
                };
            }
            for (var i = 0; i < 1000; i++) {
                randomsItems.push(createRandomItem(i));
            }
            $httpBackend.whenGET(/api\/platform\/installations\/\?.*/).respond(function(method, url, keys,headers,param){
                var searchFilters=JSON.parse(JSON.stringify(param));
                searchFilters.ordering && delete searchFilters.ordering;
                searchFilters.offset && delete searchFilters.offset;
                searchFilters.limit && delete searchFilters.limit;
                var filtered = param ? $filter('filter')(randomsItems, searchFilters) : randomsItems;

                if (param.ordering) {
                    var order = param.ordering;
                    var isReverse = (order[0] == "-");
                    if (isReverse) order = order.substr(1);
                    filtered = $filter('orderBy')(filtered, order, isReverse);
                }
                var result = filtered.slice(parseInt(param.offset), parseInt(param.offset)+ parseInt(param.limit));

                var resultobj={
                    data: result,
                    numberOfPages: Math.ceil(filtered.length / param.limit)
                };
                return [200, resultobj, {}];
            });


            var randomsNotifItems = [];
            function randomNameBuilder(nameLength){
                var names=["سلام","و","زمان","نوروز","فروش","به","آرزو","نشاط","ارمغان","ارغوان"];
                var res="";
                for(var i =0;i<nameLength;i++){
                    if(i)res+=" ";
                    res+=names[Math.floor(Math.random()*names.length)];
                }
                return res;
            }
            function createRandomNotif() {
                var apps = ['Pushe Sample B4A', 'Pushe Sample B4A', 'دموی پوشه', 'Pushe Sample Unity', 'Pushe Sample Eclipse'];
                var contactCount=Math.floor(Math.random() * 10)+1;
                return {
                    title:randomNameBuilder(4),
                    text:randomNameBuilder(7),
                    application:apps[Math.floor(Math.random() * apps.length)],
                    sendTime:Math.floor(Math.random() * 10000000),
                    status:Math.floor(Math.random() * 5)?"ارسال شده":"ارسال نشده",
                    contactCount:contactCount,
                    contactReceive:Math.floor(Math.random() * contactCount)
                };
            }
            for (var i = 0; i < 1000; i++) {
                randomsNotifItems.push(createRandomNotif());
            }
            // $httpBackend.whenGET(getRegex(URLS.URL_NOTIF,"\\?.*")).respond(function(method, url, keys,headers,param){
            $httpBackend.whenGET(/api\/notification\/notifications\/\?.*/).respond(function(method, url, keys,headers,param){
                // var filters=angular.fromJson(keys);

                //fake call to the server, normally this service would serialize table state to send it to the server (with query parameters for example) and parse the response
                //in our case, it actually performs the logic which would happened in the server
                var searchFilters=JSON.parse(JSON.stringify(param));
                searchFilters.ordering && delete searchFilters.ordering;
                searchFilters.offset && delete searchFilters.offset;
                searchFilters.limit && delete searchFilters.limit;
                var filtered = param ? $filter('filter')(randomsNotifItems, searchFilters) : randomsNotifItems;

                if (param.ordering) {
                    var order = param.ordering;
                    var isReverse = (order[0] == "-");
                    if (isReverse) order = order.substr(1);
                    filtered = $filter('orderBy')(filtered, order, isReverse);
                }
                var result = filtered.slice(parseInt(param.offset), parseInt(param.offset)+ parseInt(param.limit));

                var resultobj={
                    data: result,
                    numberOfPages: Math.ceil(filtered.length / param.limit)
                };
                return [200, resultobj, {}];
            });
            $httpBackend.whenPOST(URLS.URL_NOTIF).respond(function(method, url, keys,headers,param){
                if(Math.random()>0.5){
                    return [200, {"id":1,"filters":[
                        {"id":1,
                            "criterias":[
                                {"id":2,"key":"application_id","value":"1","operator":"="},
                                {"id":1,"key":"instance_id","value":"foo","operator":"lt"}
                            ],
                            "estimation_count":0,
                            "type":1}],
                        "notification_data":{"test1":"test1"},
                        "sent_time":null,
                        "end_time":null,
                        "status":"1","sent_count":0,
                        "delivered_count":0,
                        "clicked_count":0,
                        "dismissed_count":0,
                        "nack_count":0},
                        {}];
                }
                return [200, {"filters":[{"criterias":[{"key":["Intallation filter does not have wrong_key in its keys"]}]}]}, {}];
            });

            // $httpBackend.expectGET(url);
            //$httpBackend.whenGET(/.*/).passThrough();
            //$httpBackend.whenPOST(/.*/).passThrough();
            //$httpBackend.whenDELETE(/.*/).passThrough();
            //$httpBackend.whenPUT(/.*/).passThrough();
            $httpBackend.whenGET(/app\/.*\.html/).passThrough();
        });
})());