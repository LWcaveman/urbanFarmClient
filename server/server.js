require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', "/client/dist")));
app.use(express.json());
/* app.use((req, res, next ) => {
  res.sendFile(path.join(__dirname, "..", "client/dist", "index.html"));
}); */

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/dist", "index.html"));
})



console.log(`Listening on ${process.env.PORT}`);
app.listen(process.env.PORT);