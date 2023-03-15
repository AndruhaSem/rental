'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('sliders', [{
        
        "image": "https://s.alicdn.com/@sc04/kf/Hfdb01d40a8b143faaa1e9694dbffeecdu/15378/Hfdb01d40a8b143faaa1e9694dbffeecdu.jpg?quality=close",
        "title": "iboard",
        "createdAt": "2023-03-15 17:26:51",
        "updatedAt": "2023-03-15 17:26:51"
      },
      {
       
        "image": "https://s.alicdn.com/@sc04/kf/H58382355118f43b6ae1a7cf98bd58779k/15378/H58382355118f43b6ae1a7cf98bd58779k.jpg?quality=close",
        "title": "iboard",
        "createdAt": "2023-03-15 17:26:51",
        "updatedAt": "2023-03-15 17:26:51"
      },
      {
       
        "image": "https://sup-msk.ru/d/sapbord-funwater-tiki-blue.jpg",
        "title": "FUNWATER",
        "createdAt": "2023-03-15 17:26:51",
        "updatedAt": "2023-03-15 17:26:51"
      },
      {
       
        "image": "https://www.plushhillcycles.co.uk/images/2016_gt_aggressor_sport_02.jpg",
        "title": "Gt Aggressor sport",
        "createdAt": "2023-03-15 17:26:51",
        "updatedAt": "2023-03-15 17:26:51"
      },
      {
       
        "image": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1556646250-8041690.jpg",
        "title": "Gt Aggressor 27 sport",
        "createdAt": "2023-03-15 17:26:51",
        "updatedAt": "2023-03-15 17:26:51"
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', "2023-03-15 17:26:51",
     * "updatedAt": "2023-03-15 17:26:51", {});
     */
  }
};
