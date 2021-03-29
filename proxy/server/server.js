const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {createProxyMiddleware}=require('http-proxy-middleware');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL = "http://localhost:3000/"

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

app.get('/',(req,res)=>{
    res.send('This is a proxy')
})



module.exports = app;
