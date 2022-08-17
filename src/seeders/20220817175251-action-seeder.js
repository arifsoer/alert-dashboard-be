'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Actions', [
      {
        name: 'Immediate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Later',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'No Action',
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
