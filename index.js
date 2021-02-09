//importing node framework
var express = require('express');
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Respond with "hello world" for requests that hit our root "/"
app.get('/', (req, res) => {
  // var user = {user_id:1, user_name:'abc'}
  res.send({
    responseCode:200,
    responseMessage:'Everything worked as expected',
    responseData: {}
  });
});

app.post('/', (req,res)=>{

  const userId = Number(req.body.userId);
  res.send({
    responseCode:200,
    responseMessage:'Everything worked as expected',
    responseData: {user_id:userId}
  });
})
//listen to port 3000 by default
app.listen(3000);
 
module.exports = app;