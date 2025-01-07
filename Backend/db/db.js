const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
         // Recommended to avoid deprecation warnings
    })
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => {
        console.error('Error connecting to DB:', err);
    });
}

module.exports = connectToDb;
