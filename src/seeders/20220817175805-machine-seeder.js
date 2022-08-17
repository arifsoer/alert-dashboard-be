'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Machines', [
      {
        name: 'CNC Machine',
        normalSound: '5.wav',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Milling Machine',
        normalSound: '6.wav',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
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
