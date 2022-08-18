const express = require('express');
const app = express();
const fs = require('fs');
const route = require('./routes.js');
const parser = require('body-parser');
const admin = require('./routes/admin');
const user=require('./routes/shop')
//const server = http.createServer(route.handler);
//app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(user);
app.use(admin);


console.log("server is up");
app.listen(82);

