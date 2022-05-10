"use strict";
var express = require('express');
var app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
app.set(port, process.env.PORT);
app.use(express.static('./client/'));
http.listen(port, () => {
    console.log('App listening on port ' + port);
});
