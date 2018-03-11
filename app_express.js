const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var path = require('path');

var app = new express();
var port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'views')));
hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('capitalise', (text) => {
    return text.toUpperCase()
});
//app.use((req,res,next)=>{ res.send('Under maintenance')});

app.get('/', (req, res) => {
    res.status(200).render('index.hbs', {site_name: 'express trial'});
});

app.listen(port, () => {
    console.log('Server started listening on ', port);
});

module.exports.app=app;