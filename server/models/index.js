import sequelize from '../sequelize.js';

const syncDatabase = async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();

export default syncDatabase;


