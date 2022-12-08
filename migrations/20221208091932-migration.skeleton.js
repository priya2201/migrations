'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Person1',{
    name:Sequelize.DataTypes.STRING,
    bool:{
      type:Sequelize.DataTypes.BOOLEAN,
      defaultValue:false
    }
   });
 await queryInterface.addIndex(
      'Person1',
      ['name','bool'],{
        indicesType:'UNIQUE',
        where:{bool:true}
      }
    );
   },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Person1');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
