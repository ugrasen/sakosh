/* Create an application module that holds all services */

var GlobalServices = angular.module('GlobalServices', []);

/* Global service */

GlobalServices.service('userLoginService', function () {
    this.Status = {
      isLogin: false
    };
    this.getStatus = function () {
        return this.Status;
    };
    this.setIsLogin = function (val) {
        this.Status.isLogin = val;
    };
});