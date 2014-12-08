'use strict';

app.controller('EventsController',['$scope','$routeParams',
function($scope,$params){
    $scope.id=$params.event;
    $scope.event={
        id:1
      , title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      , banner:'http://lorempixel.com/720/150/business/1'
      , date:'December 22, 2014'
      , location:'Cercado, Cochabamba - Bolivia'
    };
    $scope.env='general';

    $scope.tab=function(tab){
        $scope.env=tab;
    };
}]);

