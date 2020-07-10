const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

const indexRoutes = require('./routes/index');
const linkRoutes = require('./routes/links');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(indexRoutes);
app.use('/links',linkRoutes);// чтобы в дальнейшем в маршрутах не указывать /links в начале
                                // тк он один общий будет в этом проекте

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}....`);
});