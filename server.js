const express = require('express');
const mongojs = require('mongojs');

const PORT = process.env.PORT || 6060;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = 'Collection';
const collections = ['Routes'];

const db = mongojs(database, collections);

require("./Develop/routes/html-routes")(app)

app.listen(PORT, ()=> {
    console.log("Listening on PORT %", PORT)
})

