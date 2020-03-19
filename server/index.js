const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const data = require('./routes/api/data');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(data);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sail_change");





app.listen(PORT, function () {
  console.log(`app running on ${PORT}`)
});