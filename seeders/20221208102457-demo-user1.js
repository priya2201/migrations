'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User1s',[{
   name:'johny',
      email:'example@example.com',
      createdAt:new Date(),
      updatedAt:new Date()

    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User1s',null,{});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
