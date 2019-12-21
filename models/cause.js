'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cause = sequelize.define('Cause', {
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    codeType: DataTypes.STRING
  }, {});
  Cause.associate = function(models) {
    // associations can be defined here
  };
  return Cause;
};