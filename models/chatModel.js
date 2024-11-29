// models/Chat.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_one_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // References the User model
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  user_two_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
}, {
  timestamps: true,
  tableName: 'chats',
});

module.exports = Chat;
