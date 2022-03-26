'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
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
      }, 
      {
        tableName: 'users'
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
