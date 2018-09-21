var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname+'/public'));

app.get('/', (req,res) =>
  res.sendFile(path.join(__dirname+'/public/index.html'))
  //__dirname : It will resolve to your project folder.
);

app.get('/headers', function(req,res){
    res.set('Content-Type','text/plain');
    var s = '';
    for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    res.send(s);
});

app.listen(3000);
console.log("Server running at Port 3000");
//a comment
//another comment
//a third comment
//a fourth comment
// last one, i sweaaaaar