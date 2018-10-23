var express = require('express')
var app = express()
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/color', function (req, res) {
    console.log("recieved something");
    res.json(
        { "color" : Math.floor(Math.random() * 0xFFFFFF) } 
    );
})
 
app.listen(3030)
