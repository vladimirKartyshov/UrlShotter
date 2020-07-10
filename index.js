const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    return res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}....`);
});