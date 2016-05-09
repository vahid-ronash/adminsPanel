/**
 * Created by mojtaba on 3/10/16.
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .config(['$provide','EnvironmentConfig',function($provide,EnvironmentConfig) {
            if(EnvironmentConfig.mode==="production")return true;
            $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
        }])
        .run(["$httpBackend","$filter","$rootScope","EnvironmentConfig","URLS",function($httpBackend,$filter,$rootScope,EnvironmentConfig,URLS) {
            if(EnvironmentConfig.mode==="production")return true;
            
            $rootScope.serverAddress="";
            var appList = [
                {id:1,active_users:15,provider:'Puzzely',name: 'Pushe Sample Eclipse', application_id:'co.ronash.pushesampleeclipse'},
                {id:2,active_users:0,provider:'JOAPP',name: 'Pushe Sample Eclipse', application_id:'co.ronash.pushesampleeclipse'},
                {id:3,active_users:1321,provider:'JOAPP',name: 'Pushe Sample Android Studio', application_id:'co.ronash.pushesampleas'},
                {id:4,active_users:51,provider:'',name: 'Pushe Sample Unity', application_id:'co.ronash.pushesampleunity'},
                {id:5,active_users:91,provider:'JOAPP',name: 'Pushe Sample B4A', application_id:'co.ronash.pushesampleb4a'},
                {id:6,active_users:101,provider:'',name: 'دموی پوشه', application_id:'co.ronash.pushesample'}
            ];
            for(var i in appList){
                appList[i].creation_datetime=getRandomTime();
            }
            $httpBackend.whenGET(/api\/v1\/applications\/\?.*/).respond(function(method, url, keys,headers,param){
                var searchFilters=JSON.parse(JSON.stringify(param));
                searchFilters.ordering && delete searchFilters.ordering;
                searchFilters.offset && delete searchFilters.offset;
                searchFilters.limit && delete searchFilters.limit;
                var filtered = param ? $filter('filter')(appList, searchFilters) : appList;

                if (param.ordering) {
                    var order = param.ordering;
                    var isReverse = (order[0] === "-");
                    if (isReverse) order = order.substr(1);
                    filtered = $filter('orderBy')(filtered, order, isReverse);
                }
                var result = filtered.slice(parseInt(param.offset), parseInt(param.offset)+ parseInt(param.limit));

                var resultobj={
                    results: result,
                    numberOfPages: Math.ceil(filtered.length / param.limit)
                };
                if(!searchFilters.offset)resultobj.previous="we have previous";
                if(parseInt(param.offset)+ parseInt(param.limit)<filtered.length)resultobj.next="we have next";
                return [200, resultobj, {}];
            });
            $httpBackend.whenGET(/api\/v1\/applications\/.*\/$/).respond(
                {
                    credentials:'{"node":"asdvsadfv","gcm":"asdvsadfv"}',
                    results:appList
                }
            );
            $httpBackend.whenGET(URLS.URL_APP).respond({count:appList.length,results:appList});
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
                {id:1,name: 'دمو', email:'demo@pushe.co',password:"demo",roles:[]},
                {id:2,name: 'دمو', email:'a@a.cc',password:"a",roles:[]},
                {id:2,name: 'دمو', email:'q@q.cc',password:"a",roles:[]}
            ];
            $httpBackend.whenGET(URLS.URL_LOGOUT).respond({logged_out:true});
            $httpBackend.whenGET(URLS.URL_GET_PROFILE).respond(
                {
                    email:"demo@pushe.co",
                    personalInfo:{
                        name:"فیلانی",
                        family:"بهمانی",
                        sex:"men",
                        nationalCode:"32165146514",
                        homePhone:"021-32165165",
                        phone:"0912156122",
                        address:"تهران - سمت راست - به طرف جلو",
                        type:"personal"
                    }
                }
            );
            $httpBackend.whenPOST(URLS.URL_LOGIN).respond(function(method, url, data){
                var dataobj=angular.fromJson(data);
                var list=userList.filter(function(user){ return (user.email===dataobj.email && user.password===dataobj.password); });
                if(list.length){
                    return [200, {logged_in:true,email:"asghar@gmail.com"}, {}];
                }
                else {
                    return [400, {detail:"username or password is wrong"}, {}];
                }
            });
            $httpBackend.whenPOST(URLS.URL_FORGOTPASS).respond({mail_sent:true});
            $httpBackend.whenPOST(URLS.URL_CHANGE_PASS).respond({changed:true});
            $httpBackend.whenPOST(/api\/accounting\/\w*\/reset_password_done\//).respond({reset_completed:true});
            $httpBackend.whenPOST(URLS.URL_REGISTER).respond(function(method, url, data){
                var dataobj=angular.fromJson(data);
                var list=userList.filter(function(user){ return (user.email===dataobj.email); });
                if(!list.length){
                    var newData=angular.extend({id:appList.length+1},dataobj);
                    userList.push(newData);
                    return [200, {success:true}, {}];
                }
                else{
                    return [400, {email:"username is taken before"}, {}];
                }
            });

            $httpBackend.whenPOST(URLS.URL_UPLOAD_ICON).respond(function(method, url, data){
                    return [200, {success:true}, {}];
            });
            $httpBackend.whenPOST(URLS.URL_UPLOAD_IMAGE).respond(function(method, url, data){
                return [200, {success:true}, {}];
            });

            function getRandomTime(){
                var d=new Date();
                d.setHours(Math.floor(Math.random() * -20000));
                return d.toJSON();
            }

            var randomsInstallationItems = [];
            function createRandomItem(id) {
                var apps = ['Pushe Sample B4A', 'Pushe Sample B4A', 'دموی پوشه', 'Pushe Sample Unity', 'Pushe Sample Eclipse'];
                var mobileModels = ['Sumsong', 'LG', 'i phone', 'motorola', 'nokia'];
                return {
                    id: id,
                    application: Math.floor(Math.random() * apps.length),
                    instance_id: Math.floor(Math.random() * 10000000),
                    creation_time: getRandomTime(),
                    test:'/platform/notify/'+Math.floor(Math.random() * 1000000)+'/',
                    imei: Math.floor(Math.random() * 621616132155),
                    smart_device:mobileModels[Math.floor(Math.random() * 5)]+" "+Math.floor(Math.random() * 9000+1000)
                };
            }
            for (i = 0; i < 1000; i++) {
                randomsInstallationItems.push(createRandomItem(i));
            }
            $httpBackend.whenGET(/api\/v1\/installations\/\?.*/).respond(function(method, url, keys,headers,param){
                var searchFilters=JSON.parse(JSON.stringify(param));
                searchFilters.ordering && delete searchFilters.ordering;
                searchFilters.offset && delete searchFilters.offset;
                searchFilters.limit && delete searchFilters.limit;
                var filtered = param ? $filter('filter')(randomsInstallationItems, searchFilters) : randomsInstallationItems;

                if (param.ordering) {
                    var order = param.ordering;
                    var isReverse = (order[0] === "-");
                    if (isReverse) order = order.substr(1);
                    filtered = $filter('orderBy')(filtered, order, isReverse);
                }
                var result = filtered.slice(parseInt(param.offset), parseInt(param.offset)+ parseInt(param.limit));

                var resultobj={
                    results: result,
                    numberOfPages: Math.ceil(filtered.length / param.limit)
                };
                if(!searchFilters.offset)resultobj.previous="we have previous";
                if(parseInt(param.offset)+ parseInt(param.limit)<filtered.length)resultobj.next="we have next";
                return [200, resultobj, {}];
                // return [504, "<html><body>its an error i mocked to show here</body></html>"];
            });
            var imeiList=[];
            for(var c =Math.floor(Math.random()*4);c<100 ;c+=Math.floor(Math.random()*10+1)){
                imeiList.push({imei:randomsInstallationItems[c].imei,name:randomNameBuilder(2)});
            }
            $httpBackend.whenPOST(/api\/v1\/installations\/\d+\/send_test_notification\//).respond(function(method, url, keys,headers,param){
                var params=JSON.parse(JSON.stringify(param));
                params.id=25615;
                return {data:params};
            });
            $httpBackend.whenGET(URLS.URL_IMEI).respond({results:imeiList});
            $httpBackend.whenDELETE(/api\/v1\/favorites\/\.*\//).respond(true);
            $httpBackend.whenPOST(URLS.URL_IMEI).respond(true);


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
                var sentCount=Math.floor(Math.random() * 10)+1;
                var clickDismissCount=Math.floor(Math.random() * sentCount);
                var clickedCount=Math.floor(Math.random() *clickDismissCount);
                return {
                    notification_data:{
                        title:randomNameBuilder(4),
                        content:randomNameBuilder(7),
                    },
                    application:apps[Math.floor(Math.random() * apps.length)],
                    send_time:getRandomTime(),
                    status:Math.floor(Math.random() * 5)+1,
                    sent_count:sentCount,
                    delivered_count:Math.floor(Math.random() * sentCount),

                    clicked_count:clickedCount,
                    dismissed_count:clickDismissCount- clickedCount
                };
            }
            $httpBackend.whenGET(URLS.URL_GET_DASHBOARD_DATA).respond(
                {
                    installations:32062,
                    applications:5,
                    notifications:3512
                }
            );

            for (var ni = 0; ni < 1000; ni++) {
                randomsNotifItems.push(createRandomNotif());
            }
            // $httpBackend.whenGET(getRegex(URLS.URL_NOTIF,"\\?.*")).respond(function(method, url, keys,headers,param){
            $httpBackend.whenGET(/api\/v1\/notifications\/\?.*/).respond(function(method, url, keys,headers,param){
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
                    results: result,
                    numberOfPages: Math.ceil(filtered.length / param.limit)
                };
                if(!searchFilters.offset)resultobj.previous="we have previous";
                if(parseInt(param.offset)+ parseInt(param.limit)<filtered.length)resultobj.next="we have next";
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
            $httpBackend.whenGET(/assets\/.*\.xml/).passThrough();
            $httpBackend.whenGET("app/notifications/notifWizardSteps/notificationButtonSetter/notificationButtonTemplate.html").passThrough();
            $httpBackend.whenGET("app/notifications/notifWizardSteps/notificationAction/notificationActionTemplate.html").passThrough();
            $httpBackend.whenGET("app/shared/sxWizardCopy/wizardTemplate.html").respond("<div></div>");
        }]);
})());