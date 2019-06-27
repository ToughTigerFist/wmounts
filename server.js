const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    http = require('http');
    config = require('./src/utils/DB')

    mongoose.Promise = global.Promise;
    console.log(config.DB)
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    
    const port = process.env.PORT || 3000;
    app.use(express.static(path.join(__dirname, '/dist/wmounts')));

    app.get("/*", (req,res) => res.sendFile(path.join(__dirname)))

    const server = app.listen(port,function(){
        console.log('Listening on port ' + port);
    });