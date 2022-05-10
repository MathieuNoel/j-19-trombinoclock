const express = require('express');
const router = require('./app/router');

const app = express();
const PORT = 5050;

app.set('views', './app/views');
app.set('view engine', 'ejs');


app.use(express.static('./public'));


app.use(router);

// RQ: peut aussi être mis à la fin du router!
app.use((req, res) => {
    res.status(404).render('404');
});


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
