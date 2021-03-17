/*****----- DEPENDENCIES -----*****/

// Requiring dependent modules for project 
const express = require('express');
const https = require('https');
const http = require('http');
const pug = require('pug');
const data = require('./data.json');

/*****----- EXPRESS CALL -----*****/
// Creating app variable to serve as new instance of the express module for this site
const app = new express();

/*****----- VIEW ENGINE -----******/

// Setting view engine to pug - syntax refresh found at https://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'pug');

/*****----- STATIC FILES -----*****/

// Serving static files to client with static mount path. Syntax refresh found at http://expressjs.com/en/starter/static-files.html
app.use('/static', express.static('public'));

/******----- ROUTES ------ *****/

// Index route
app.get('/',(req, res, next) => {
    app.locals.projects = data.projects;
    res.render('index', app.locals.projects);
});

// About route
app.get('/about',(req, res, next) => {
    res.render('about');
});


// Dynamic Project route
app.get('/project/:id',(req, res, next) => {
    const id = req.params.id;
    res.locals.id = id;
    let numbers = [];
    for(let project of data.projects){
        numbers.push(project.id);
    }
    if (numbers.includes(parseInt(id))){
        res.render('project', {id});
    } else{
        return next();
    }
});

// 404 error
app.use((req, res, next) => {
    const err = new Error(`Sorry! Page route [ ${req.path} ] not found.`);
    err.status = 404;
    return next(err);
});

// Error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    if (!err.status){
        err.status = 500;
        err.message = 'Looks like we encountered an issue with your request!'
    }
    res.status(err.status); 
    if (err.status === 404){
        res.render('page-not-found', err);
    } else{
        res.render('error', err);
    }
    console.log(`Error! Status: ${err.status} 
    ${err.message}`)
});

/*****----- START SERVER -----*****/ 
// Defining port and supplying console message to confirm success
app.listen(3000, () => {
    console.log('This app is listening on port 3000.')
});
