'use strict';

var app=angular
    .module('BusinessApp',['ngRoute','ngResource','ngAnimate','ngStorage'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl:'/home',
                controller:'HomeController'
            })
            .when('/login',{
                templateUrl:'/login',
                controller:'LoginController'
            })
            .when('/signup',{
                templateUrl:'/signup',
                controller:'SignupController'
            })
            .when('/events/:event',{
                templateUrl:'/events/view',
                controller:'EventsController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);

