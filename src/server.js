var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 80));
const parentDir = require('path').resolve(__dirname, '..')
console.log('dirname='+parentDir)
app.use(express.static(parentDir + '/build'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});