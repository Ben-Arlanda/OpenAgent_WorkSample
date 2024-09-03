import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js'

const Contact = sequelize.define('contacts', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.TEXT,
  },
});

export default Contact;
