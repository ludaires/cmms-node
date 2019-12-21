'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Maintenances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      equipmentId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      nextMaintenanceDate: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      maintenanceType: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Maintenances');
  }
};