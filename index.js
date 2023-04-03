const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
require('./configs/mongooseConfig');

const APP_PORT =  process.env.PORT || 3000;
const server = require('http').createServer(app);

// Initialize CORS Policy
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept,Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,DELETE,POST');
        return res.status(200).json({});
    }
    next();
});

// Initialize Session
app.use(session({
    secret: 'electric_vehicles',
    resave: true,
    maxAge: 900000,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.use(express.json());

// Setup The View Engine
app.set('Views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

// Pass the DATA
app.use(express.urlencoded({ extended: false }));

// Join Public Fodler
app.use(express.static(path.join(__dirname, '/public')));

// Routes for Pages
app.use('/', require('./routes/pages/routes'));

// API's Routes
app.use('/api', require('./routes/api/routes'));

server.listen(APP_PORT, () => {
    console.log(`Server Started At PORT ${APP_PORT}`);
});