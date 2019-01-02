'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter recipe name'
      }
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: {
        args: false,
        msg: 'Please enter recipe name'
      }
    },
    instructions:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: {
        args: false,
        msg: 'Please enter recipe name'
      }
    }
  }, {});
  Recipe.associate = function (models) {
    // associations can be defined here
  };
  return Recipe;
};