/**
 * Created by Sahin on 01/10/16.
 */

var express = require('express');
var app = express();
var PORT = 3001;


var middleware = {
    appLevelMiddleWare: function (req, resp, next) {
        console.log('I am app level middle ware Req date :' + new Date().toString() + ' ');
        resp.send('App level get reponse');
        next();
    },

    appAboutMiddleWare: function (req, resp, next) {
        console.log('I am the about middleware. Req date :' + new Date().toString());
        req.send('About path response');
        next();
    }
};


app.use(middleware.appLevelMiddleWare);


app.get('/about', middleware.appAboutMiddleWare(), function (req, resp) {
    resp.send('I got the request.This is my response');
})

app.listen(PORT, function () {
    console.log('Server starter on port :' + PORT);
})

