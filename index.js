var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    setInterval(function setIntervalCallback(){
        //do something every 10 sec
        console.log("hi");
    }, 10000);
});