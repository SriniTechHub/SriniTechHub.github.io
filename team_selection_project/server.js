const express = require('express')
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
   res.sendFile('public/index.html', {root: __dirname })
})
console.log(`server is listening on ${port}`)
app.listen(port)