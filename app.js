var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Jenkins Build Pipeline using GITHUB- 2");
});

app.listen(4000);
