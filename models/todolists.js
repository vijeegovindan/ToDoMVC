'use strict';
module.exports = function(sequelize, DataTypes) {
  var todolists = sequelize.define('todolists', {
    title: DataTypes.STRING,
    listorder: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todolists;
};
