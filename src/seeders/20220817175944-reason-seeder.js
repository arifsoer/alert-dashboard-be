"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const reasons = [
      {
        machineId: 1,
        name: "Spindle Error",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        machineId: 1,
        name: "Axis Problem",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        machineId: 1,
        name: "Normal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        machineId: 2,
        name: "Machine Crash",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        machineId: 2,
        name: "Router Fault",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        machineId: 2,
        name: "Normal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Reasons", reasons);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
