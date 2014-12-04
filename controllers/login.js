'use strict';

module.exports=function(app){
    app.get('/login',function(request,response){
        response.render('pages/login');
    });
};

