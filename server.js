const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = 3000;

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
