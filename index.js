//load modules
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./app/routes/router');

// database configuration
const database = require('./app/config/dbconfig');

//Init database
database.init()

const port = process.argv[2] || 8000;
app.listen(port, function () {
    console.log("Server  is listening on port: " + port);
});

// Express config
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Router config
app.use("/api", router);