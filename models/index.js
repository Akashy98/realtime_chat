const sequelize = require('./config/db');
const { User, Chat, Message } = require('./models/associations');

// Sync models to the database
sequelize.sync({ force: false })  // Set force: true to drop and re-create the tables
  .then(() => {
    console.log("Database synced");
  })
  .catch((error) => {
    console.error("Error syncing database: ", error);
  });
