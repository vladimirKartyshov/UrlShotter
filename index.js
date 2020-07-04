const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    return res.send('Hello world!!!');
});

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}....`);
});