const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    http = require('http');

    const app = express();
    
    const port = process.env.PORT || 3000;
    app.use(express.static(path.join(__dirname, '/dist/wmounts')));

    app.get("/*", (req,res) => res.sendFile(path.join(__dirname)))

    const server = app.listen(port,function(){
        console.log('Listening on port ' + port);
    });