'use strict';

app.controller('HomeController',['$scope',function($scope){
    $('header nav ul li:nth-child(1)').addClass('active')
        .siblings().removeClass('active');

    $scope.events=[{
        id: 1
      , title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      , banner: 'http://lorempixel.com/460/150/business/1'
      , date: 'December 22, 2014'
      , location: 'Cercado, Cochabamba - Bolivia'
    },{
        id: 2
      , title: 'Donec porttitor felis aliquam urna tincidunt interdum id sed mauris.'
      , banner: 'http://lorempixel.com/460/150/business/2'
      , date: 'December 24, 2014'
      , location: 'Cercado, Cochabamba - Bolivia'
    },{
        id: 3
      , title: 'Curabitur eu diam vitae quam convallis pretium.'
      , banner: 'http://lorempixel.com/460/150/business/3'
      , date: 'December 27, 2014'
      , location: 'Punata, Cochabamba - Bolivia'
    },{
        id: 4
      , title: 'Proin suscipit libero ut libero tempor sagittis.'
      , banner: 'http://lorempixel.com/460/150/business/4'
      , date: 'January 01, 2015'
      , location: 'Aiquile, Cochabamba - Bolivia'
    },{
        id: 5
      , title: 'Sed non leo quis arcu eleifend tempus ac eu lorem.'
      , banner: 'http://lorempixel.com/460/150/business/5'
      , date: 'January 01, 2015'
      , location: 'Poopo, Oruro - Bolivia'
    },{
        id: 6
      , title: 'Donec pulvinar erat non est bibendum, eu molestie lacus dignissim.'
      , banner: 'http://lorempixel.com/460/150/business/6'
      , date: 'January 01, 2015'
      , location: 'El Alto, La Paz - Bolivia'
    },{
        id: 7
      , title: 'Suspendisse id dui ac est congue lacinia.'
      , banner: 'http://lorempixel.com/460/150/business/7'
      , date: 'January 02, 2015'
      , location: 'Viacha, La Paz - Bolivia'
    },{
        id: 8
      , title: 'Curabitur pharetra tellus ut sagittis rutrum.'
      , banner: 'http://lorempixel.com/460/150/business/8'
      , date: 'January 08, 2015'
      , location: 'Cercado, Cochabamba - Bolivia'
    },{
        id: 9
      , title: 'In vulputate purus bibendum urna aliquam, sit amet maximus dolor finibus.'
      , banner: 'http://lorempixel.com/460/150/business/9'
      , date: 'January 08, 2015'
      , location: 'Sacaba, Cochabamba - Bolivia'
    },{
        id: 10
      , title: 'Fusce vel justo id orci sodales placerat.'
      , banner: 'http://lorempixel.com/460/150/business/10'
      , date: 'January 12, 2015'
      , location: 'Quillacollo, Cochabamba - Bolivia'
    }];
}]);

