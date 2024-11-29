const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'realtime_chat'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = {
    getAllUsers: (callback) => {
        db.query('SELECT * FROM users', callback);
    },
    getMessages: (userId, callback) => {
        db.query(
            'SELECT * FROM messages WHERE sender_id = ? OR receiver_id = ?',
            [userId, userId],
            callback
        );
    }
};
