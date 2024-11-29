const User = require('./User');
const Chat = require('./Chat');
const Message = require('./Message');

// User has many Chats (either as user_one or user_two)
User.hasMany(Chat, { foreignKey: 'user_one_id' });
User.hasMany(Chat, { foreignKey: 'user_two_id' });

// Chat has many Messages
Chat.hasMany(Message, { foreignKey: 'chat_id' });

// User has many Messages (sender of messages)
User.hasMany(Message, { foreignKey: 'sender_id' });

// Export models to use them later
module.exports = { User, Chat, Message };
