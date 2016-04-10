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
        .service('Session',['$sessionStorage', function ($sessionStorage) {
            this.isAuth=function(){
                if(!this.user) this.create(); //try to recover user from cookie
                if(this.user)
                    return !!this.user.email;
                else
                    return false;
            };
            this.create = function (emailAddress) {
                var email=emailAddress||($sessionStorage.user && $sessionStorage.user.email)
                if(email) {
                    $sessionStorage.user = this.user = {
                        email: email
                    }
                }
            };
            this.destroy = function () {
                $sessionStorage.user= this.user =null;
            };

            this.load=function(){
                this.create();
            };
        }]);
})());