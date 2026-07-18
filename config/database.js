const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('❌ MONGO_URI is not defined. Check your .env file.');
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB Atlas successfully...'))
    .catch((err) => console.error('❌ Database connection error:', err));

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('❌ Database connection error:', err);
});

module.exports = db;