/**
 * Created by mojtaba on 3/9/16.
 */
/**
 * @ngdoc service
 * @name app.services.Session
 * @description
 * hold logged in user data
 */
/*global angular */
((function() {
    'use strict';
    angular
        .module('app')
        .service('Session',function(){//,['$cookies', function ($cookies) {
            var $cookies={get:function(){}};//TODO remove me
            this.isAuth=function(){
                if(!this.user){
                    var sessionID=$cookies.get("session_id");
                    var emailAddress=$cookies.get("emailAddress")||"";
                    if(sessionID) {
                        this.user = {
                            email:emailAddress,
                            sessionId: sessionID
                        };
                    }
                    else{
                        return false;
                    }
                }
                return true;
            };
            this.create = function () {
                var sessionID=$cookies.get("session_id");
                var emailAddress=$cookies.get("emailAddress")||"";
                var userRole=$cookies.get("userRoles")||"";
                if(sessionID) {
                    this.user = {
                        email:emailAddress,
                        sessionId: sessionID,
                        roles:userRole
                    };
                }
                else{
                    return false;
                }
            };
            this.destroy = function () {
                $sessionStorage.user=this.user =null;
            };

            this.load=function(){
                this.user=$sessionStorage.user;
            };
        });
})());