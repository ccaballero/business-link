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
      , buyers:[]
      , suppliers:[{
            label:'Eleifend S.A.'
          , desc:'Proin sed eros eget metus ullamcorper eleifend.'
        },{
            label:'Mollis Inc.'
          , desc:'Nunc non leo at sem egestas mollis quis quis mi.'
        },{
            label:'Est S.A.'
          , desc:'Proin euismod est facilisis, fringilla neque ut, ullamcorper est.'
        },{
            label:'Eget Inc.'
          , desc:'Duis eu lorem eget massa pulvinar ullamcorper eget at sapien.'
        }]
    };
    $scope.env='general';

    $scope.tab=function(tab){
        $scope.env=tab;
    };
}]);

