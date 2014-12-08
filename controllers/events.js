'use strict';

module.exports=function(app){
    app.get('/events/view',function(request,response){
        response.render('pages/events');
    });

    app.get('/events/new',function(request,response){
        response.render('pages/events/new');
    });
};

