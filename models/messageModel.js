// models/Message.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Chat = require('./Chat'); // Import Chat model
const User = require('./User'); // Import User model

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  chat_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Chat, // References the Chat model
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // References the User model
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sent_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // No timestamps (created_at, updated_at)
  tableName: 'messages',
});

module.exports = Message;
