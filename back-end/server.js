var express = require('express')
var app = express()
 
app.get('/color', function (req, res) {
    console.log("recieved something");
    res.json(
        { "color" : Math.random() * 0x000000 } 
    );
})
 
app.listen(3030)
