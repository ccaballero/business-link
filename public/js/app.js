'use strict';

var app=angular
    .module('BusinessApp',['ngRoute','ngResource','ngAnimate','ngStorage'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl:'/home',
                controller:'HomeController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);

