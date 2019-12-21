'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inspection = sequelize.define('Inspection', {
    maintenanceId: DataTypes.INTEGER,
    partId: DataTypes.INTEGER,
    issueId: DataTypes.INTEGER,
    actionId: DataTypes.INTEGER,
    causeId: DataTypes.INTEGER
  }, {});
  Inspection.associate = function(models) {
    // associations can be defined here
  };
  return Inspection;
};