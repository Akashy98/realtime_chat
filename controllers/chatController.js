const userModel = require('../models/userModel');
const messageModel = require('../models/messageModel');

exports.getHomePage = (req, res) => {
    userModel.getAllUsers((err, results) => {
        if (err) {
            console.error('Error fetching users:', err.message);
            return res.status(500).send('An error occurred while fetching users.');
        }
        res.render('home', { users: results });
    });
};

exports.getChatPage = (req, res) => {
    const userId = req.params.id;
    messageModel.getMessages(userId, (err, messages) => {
        if (err) {
            console.error('Error fetching messages:', err.message);
            return res.status(500).send('An error occurred while fetching messages.');
        }
        res.render('chat', { messages, userId });
    });
};
