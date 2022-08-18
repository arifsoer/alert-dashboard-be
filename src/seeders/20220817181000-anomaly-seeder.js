'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const anomalies = [
      {
        machineId: 1,
        name: 'Mild',
        sensor: 1234567890,
        soundClip: '1.wav',
        detectedAt: new Date(1628676001 * 1000),
        isAlreadyOpen: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machineId: 1,
        name: 'Moderate',
        sensor: 123456789,
        soundClip: '2.wav',
        detectedAt: new Date(1629102961 * 1000),
        isAlreadyOpen: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machineId: 1,
        name: 'Severe',
        sensor: 1234567890,
        soundClip: '3.wav',
        detectedAt: new Date(1629058322 * 1000),
        isAlreadyOpen: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machineId: 2,
        name: 'Mild',
        sensor: 1122334455,
        soundClip: '4.wav',
        detectedAt: new Date(1629057722 * 1000),
        isAlreadyOpen: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machineId: 2,
        name: 'Moderate',
        sensor: 2345678900,
        soundClip: '5.wav',
        detectedAt: new Date(1629025202 * 1000),
        isAlreadyOpen: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machineId: 2,
        name: 'Severe',
        sensor: 2345678900,
        soundClip: '6.wav',
        detectedAt: new Date(1629057361 * 1000),
        isAlreadyOpen: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('Anomalies', anomalies);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
