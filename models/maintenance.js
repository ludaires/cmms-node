'use strict';
module.exports = (sequelize, DataTypes) => {
  const Maintenance = sequelize.define('Maintenance', {
    userId: DataTypes.INTEGER,
    equipmentId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    nextMaintenanceDate: DataTypes.STRING,
    notes: DataTypes.STRING,
    maintenanceType: DataTypes.STRING
  }, {});
  Maintenance.associate = function(models) {
    // associations can be defined here
  };
  return Maintenance;
};