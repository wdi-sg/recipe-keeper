'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: 'Please enter recipe name'
        }
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        allowNull: {
          args: false,
          msg: 'Please enter recipe name'
        }
      },
      instructions: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: {
          args: false,
          msg: 'Please enter recipe name'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};