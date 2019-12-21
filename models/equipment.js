'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define('Equipment', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    location: DataTypes.STRING,
    calibrationUnit: DataTypes.STRING,
    calibrationStart: DataTypes.STRING,
    calibrationEnd: DataTypes.STRING,
    uncertainty: DataTypes.STRING
  }, {});
  Equipment.associate = function(models) {
    // associations can be defined here
  };
  return Equipment;
};