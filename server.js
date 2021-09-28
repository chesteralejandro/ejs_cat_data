const path = require('path');
const express = require('express');
const app = express();

// app.use(express.static(__dirname + '/static'));
app.use(express.static(path.join(__dirname, 'static')));

// app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const cats = [
    {
        name: 'Blackie',
        sleepingSpot: 'Couch',
        age: 3,
        favoriteFoods: ['Tuna', 'Carrots', 'Bread'],
        imagePath: '/images/cat2.jpg'
    },
    {
        name: 'Stefie',
        sleepingSpot: 'Under the drawer',
        age: 1,
        favoriteFoods: ['Bell pepper', 'Chicken'],
        imagePath: '/images/cat3.png'
    },
    {
        name: 'Family',
        sleepingSpot: 'Everywhere',
        age: 'Range from 1 to 3',
        favoriteFoods: ['Chicken', 'Pork', 'Beef', 'Cat Food'],
        imagePath: '/images/cats.jpg'
    }
]

app.get('/cats', function(req, res) {
    res.render('cats', {'cats': cats});
});

for(let i = 0; i < cats.length; i++) {
    app.get(`/cats/${cats[i].name.toLowerCase()}`, function(req, res) {
        res.render('details', {'cat': cats[i]});
    });
}

const port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("Listening on port... ", port);
})