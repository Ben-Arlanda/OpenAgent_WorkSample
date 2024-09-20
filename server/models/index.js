import sequelize from '../sequelize.js';

const syncDatabase = async () => {
  try {
    await sequelize.sync();
  } catch (error) {
  }
};

syncDatabase();

export default syncDatabase;


