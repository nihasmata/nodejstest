/**
 * Created by Sahin on 01/10/16.
 */
/**
 * Created by Sahin on 01/10/16.
 */

var express = require('express');
var app = express();
var PORT = 3001;


var middleware = {
    firstMiddleware: function (req, resp, next) {
        console.log('first middleware');
        next();
    },

    secondMiddleware: function (req, resp, next) {
        console.log('second middleware');
    },

    thirdMiddleware: function (req, resp, next) {
        console.log('third middleware');
        next();
    },
};


app.get('/about', middleware.firstMiddleware, middleware.secondMiddleware);
app.get('/about', middleware.thirdMiddleware);

app.listen(PORT, function () {
    console.log('Server started...')
})