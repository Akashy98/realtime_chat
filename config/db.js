require('dotenv').config();  // Load environment variables from .env file
const { Sequelize } = require('sequelize');

// Create a MySQL connection using environment variables
const mysql = require('mysql');
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
});

// Establish connection
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        throw err;
    }
    console.log('Connected to MySQL');
});

// Pass the existing mysql connection to Sequelize
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {
        timestamps: false, // globally disable timestamps unless needed in specific models
    },
    dialectOptions: {
        connectTimeout: 10000,  // Adjust connection timeout (optional)
    },
    // Additional options can be set here as needed
});

module.exports = sequelize;
