'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Person',[{
      name:'siya',
      isBetaMember:true,
      petName:'dusty',
      favoriteColor:'blue',
      petchildName:'shepherd',
      petParentName:'siyaka',
      petfirstName:'duskya'
      
    },
  {name:'rocks',
    isBetaMember:false,
    petName:'dusty',
    favoriteColor:'blue',
    petchildName:'shepherd',
    petParentName:'siyaka',
    petfirstName:'duskya'
  }])
  },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Person',null,{});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
