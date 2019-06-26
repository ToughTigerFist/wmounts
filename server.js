const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    mongoose = require('mongoose');

    const app = express();
    app.use(express.static("."))
    const port = process.env.PORT || 3000;

    const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });