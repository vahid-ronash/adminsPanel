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
        .service('Session', function () {
            this.create = function (sessionId, userId, email, userRole) {
                this.id = sessionId;
                this.userId = userId;
                this.email=email;
                this.userRole = userRole;
            };
            this.destroy = function () {
                this.id = null;
                this.userId = null;
                this.email=null;
                this.userRole = null;
            };
        });
})());