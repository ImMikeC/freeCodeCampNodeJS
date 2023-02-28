const express = require('express');
const app = express();

path = __dirname + '/views/index.html'
midpath = __dirname + '/public'

app.get('/json', function(req, res) {
  res.json({"message": "Hello json"});
})

//app.use('/public', express.static(midpath))

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
