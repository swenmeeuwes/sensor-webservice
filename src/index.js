const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 433;

// Set up database connection
const dev_db_url = '';
const mongoDbConfig = { useNewUrlParser: true };
const mongoDb = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDb, mongoDbConfig);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure routes
const routes = require('./routes');
app.use('/api', routes);

// Serve static files from 'public' folder
app.use(express.static('public'));

// Default API response
app.get('/', (req, res) => {
    res.sendStatus(200); // OK
});

app.listen(port, () => {
    console.log(`Server is up and running on port number ${port}`);
});