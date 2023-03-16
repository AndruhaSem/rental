'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'users', // table name
        'is_admin', // new field name
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          after: "image"
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'users', 
        'is_admin', 
      )
    ])
  }
};
