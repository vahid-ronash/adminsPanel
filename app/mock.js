/**
 * Created by mojtaba on 3/10/16.
 */
/*global angular */
((function() {
    'use strict';
    var userList = [
        {id:1,name: 'دمو', email:'demo@pushe.co',password:"1234",roles:[]}
    ];
    var appList = [
        {id:1,name: 'Pushe Sample Eclipse', packname:'co.ronash.pushesampleeclipse'},
        {id:2,name: 'Pushe Sample Android Studio', packname:'co.ronash.pushesampleas'},
        {id:3,name: 'Pushe Sample Unity', packname:'co.ronash.pushesampleunity'},
        {id:4,name: 'Pushe Sample B4A', packname:'co.ronash.pushesampleb4a'},
        {id:5,name: 'دموی پوشه', packname:'co.ronash.pushesample'}
    ];
    var installed=[
        {id:1,device: '21342342', application:'Pushe Sample B4A',installTime:'2016/03/13',lastSeen:'2016/03/13',test:'/platform/notify/dR5JHTxjKNk/'},
        {id:2,device: '345352', application:'Pushe Sample Unity',installTime:'2016/03/15',lastSeen:'2016/03/13',test:'/platform/notify/ssdvcsdc/'},
        {id:3,device: '345352', application:'Pushe Sample Unity',installTime:'2016/03/16',lastSeen:'2016/03/13',test:'/platform/notify/ascawecaec/'},
        {id:4,device: '21342342', application:'Pushe Sample B4A',installTime:'2016/03/13',lastSeen:'2016/03/13',test:'/platform/notify/dR5JHTxjKNk/'},
        {id:5,device: '345352', application:'Pushe Sample Unity',installTime:'2016/03/15',lastSeen:'2016/03/13',test:'/platform/notify/ssdvcsdc/'},
        {id:6,device: '345352', application:'Pushe Sample Unity',installTime:'2016/03/16',lastSeen:'2016/03/13',test:'/platform/notify/ascawecaec/'},
    ];
    angular
        .module('app')
        .config(function($provide) {
            $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
        })
        .run(function($httpBackend,$filter) {
            $httpBackend.whenGET('/userApp').respond(appList);
            $httpBackend.whenPUT('/userApp').respond({success:true});
            //mock has problem with /userApp/:id expression so we just can delete id=1
            $httpBackend.whenDELETE('/userApp/1').respond({success:true});
            $httpBackend.whenPOST('/userApp').respond(function(method, url, data){
                var dataobj=angular.fromJson(data);
                var newData=angular.extend({id:appList.length+1},dataobj);
                appList.push(newData);
                return [200, data, {}];
            });

            $httpBackend.whenGET('/logout').respond({success:true});
            $httpBackend.whenPOST('/login').respond(function(method, url, data){
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
            $httpBackend.whenPOST('/installed').respond(function(method, url, data){
                var filters=angular.fromJson(data);

                //fake call to the server, normally this service would serialize table state to send it to the server (with query parameters for example) and parse the response
                //in our case, it actually performs the logic which would happened in the server

                var filtered = filters.params.search.predicateObject ? $filter('filter')(randomsItems, filters.params.search.predicateObject) : randomsItems;

                if (filters.params.sort.predicate) {
                    filtered = $filter('orderBy')(filtered, filters.params.sort.predicate, filters.params.sort.reverse);
                }

                var result = filtered.slice(filters.start, filters.start + filters.number);

                var resultobj={
                    data: result,
                    numberOfPages: Math.ceil(filtered.length / filters.number)
                };
                return [200, resultobj, {}];
            });

            //$httpBackend.whenGET(/.*/).passThrough();
            //$httpBackend.whenPOST(/.*/).passThrough();
            //$httpBackend.whenDELETE(/.*/).passThrough();
            //$httpBackend.whenPUT(/.*/).passThrough();
            $httpBackend.whenGET(/\.html/).passThrough();
        });
})());