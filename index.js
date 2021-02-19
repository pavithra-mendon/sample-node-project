//importing node framework
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    responseCode:200,
    responseMessage:'Everything worked as expected',
    responseData: {}
  });
});

app.post('/', (req,res)=>{

  const userId = Number(req.body.userId);
  res.send({
    responseCode:201,
    responseMessage:'Everything worked as expected',
    responseData: {user_id:userId}
  });
})
//listen to port 3000 by default
const server = app.listen(3000, () => console.log(`Listening to http://localhost:${3000}`));
 
module.exports = {
  app:app,
  server:server
};