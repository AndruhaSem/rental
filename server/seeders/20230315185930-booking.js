'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('bookings', [{
       
        "image": "https://www.hawaii.ee/image/catalog/blog/Gravel/Gravel%20shoot%20SCOTT%20Sports%202019%20bike%20by%20Kramon_Scott_2813.jpg",
        "product": "Велосипед",
        "title": "Почувствуй это лето",
        "createdAt": "2023-03-15 17:26:51",
        "updatedAt": "2023-03-15 17:26:51"
      },
      {
        
        "image": "https://tprokat.ru/upload/iblock/96a/96ae4fdb88a62c2bf6ec11617873565d.jpg",
        "product": "Сапборд",
        "title": "Почувствуй это лето",
        "createdAt": "2023-03-15 17:26:51",
        "updatedAt": "2023-03-15 17:26:51"
      }], {});
    
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
