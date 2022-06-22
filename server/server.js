require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '..', "/client/dist")));
app.use(express.json());
/* app.use((req, res, next ) => {
  res.sendFile(path.join(__dirname, "..", "client/dist", "index.html"));
}); */
let url = 'http://localhost:3005'
app.get('/crops', (req, res) => {
  console.log(`recieved ${req.method.toLowerCase()} request from ${req.url}`);
  //let url = 'http://localhost:3005/crops'
  axios.get(url+req.url).then((data) => {
    //console.log('FRONT END SERVER DATA ', data)
    res.status(200).send(data.data);
  })
}); 

app.get('/inventory', (req, res) => {
  console.log(`recieved ${req.method.toLowerCase()} request from ${req.url}`);
  axios.get(url+req.url).then((data) => {
    res.status(200).send(data.data);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/dist", "index.html"));
});




console.log(`Listening on ${process.env.PORT}`);
app.listen(process.env.PORT);