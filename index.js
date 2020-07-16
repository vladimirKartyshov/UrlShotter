const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000 || process.env.PORT;
const connectDb = require('./config/db');
const indexRoutes = require('./routes/index');
const linkRoutes = require('./routes/links');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(indexRoutes);
app.use('/links',linkRoutes);// чтобы в дальнейшем в маршрутах не указывать /links в начале
                                // тк он один общий будет в этом проекте

connectDb.then( () => {
    app.listen(PORT, () => {
        console.log(`Server is working on ${PORT}....`);
    });
}).catch( (err) => {
    console.log('Error', JSON.stringify(err));
});
