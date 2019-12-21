'use strict';
module.exports = (sequelize, DataTypes) => {
  const Action = sequelize.define('Action', {
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    codeType: DataTypes.STRING
  }, {});
  Action.associate = function(models) {
    // associations can be defined here
  };
  return Action;
};