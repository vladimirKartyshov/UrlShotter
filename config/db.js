const mongoose = require('mongoose');
const link = 'mongodb+srv://vladimir:WTixrLddoFh6rFGE@cluster0-vbmej.mongodb.net/<dbname>?retryWrites=true&w=majority'

const connectDb = () => {
    return mongoose.connect(link, {useNewUrlParser: true});
}

module.exports = connectDb();