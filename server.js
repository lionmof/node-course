const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})
app.use(express.static(__dirname + '/public'));

app.get('/', (reg, res) =>  {

       res.render('home.hbs', {
            pageTitle: 'Home page',
        })

});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
    });
})
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});