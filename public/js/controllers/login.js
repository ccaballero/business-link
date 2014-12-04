'use strict';

app.controller('LoginController',['$scope',function($scope){
    $('header nav ul li:nth-child(1)').addClass('active')
        .siblings().removeClass('active');

}]);

