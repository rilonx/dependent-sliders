'use strict';
const http = require('http');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

http.createServer(app).listen('3030', () => {
    console.log('Server started on 3030');
});