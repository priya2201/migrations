'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Person2',{
      name:Sequelize.DataTypes.STRING,
      isBetaMember:{
        type:Sequelize.DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
      },
      userId:{
        type:Sequelize.DataTypes.INTEGER,
        references:{
          model:{
            tableName:'user1s',
            schema:'schema'
          },
          key:'id'
        },
        allowNull:false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Person2')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
