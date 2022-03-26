const connection = require('../config/database');
const { DataTypes } = require('sequelize');

const User = connection.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true   
    },
    nome: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    email: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    google_id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    token_redefinir: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
  }
},{
  tableName: 'users'
});

module.exports = User;
