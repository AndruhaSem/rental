'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'orders', // table name
        'total_price', // new field name
        {
          type: Sequelize.INTEGER.UNSIGNED,
          defaultValue: 0
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'orders', 
        'total_price', 
      )
    ])
  }
};
