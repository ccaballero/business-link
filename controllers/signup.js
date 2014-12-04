'use strict';

module.exports=function(app){
    app.get('/signup',function(request,response){
        response.render('pages/signup');
    });
};

