'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Anomalies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      machineId: {
        type: Sequelize.INTEGER
      },
      reasonId: {
        type: Sequelize.INTEGER
      },
      actionId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sensor: {
        type: Sequelize.BIGINT
      },
      comment: {
        allowNull: true,
        type: Sequelize.STRING
      },
      soundClip: {
        type: Sequelize.STRING
      },
      isAlreadyOpen: {
        type: Sequelize.BOOLEAN
      },
      detectedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Anomalies')
  }
};
