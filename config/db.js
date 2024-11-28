require('dotenv').config();  // Load environment variables from .env file
const mysql = require('mysql');

// Create a single connection using environment variables
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

// Modular query execution
const executeQuery = (query, params = [], callback) => {
    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Database query failed:', err.message);
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllUsers: (callback) => {
        const query = 'SELECT * FROM users';
        executeQuery(query, [], callback);
    },

    getMessages: (userId, callback) => {
        const query = `
            SELECT * FROM messages 
            WHERE sender_id = ? OR receiver_id = ?
            ORDER BY created_at ASC`; 
        executeQuery(query, [userId, userId], callback);
    },

    addMessage: (messageData, callback) => {
        const query = `
            INSERT INTO messages (sender_id, receiver_id, message, created_at)
            VALUES (?, ?, ?, NOW())`;
        executeQuery(
            query,
            [messageData.sender_id, messageData.receiver_id, messageData.message],
            callback
        );
    }
};
