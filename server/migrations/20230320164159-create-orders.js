'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      place: {
        type: Sequelize.STRING
      },
      time_rental: {
        type: Sequelize.FLOAT
      },
      phone: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      payment: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      deposit: {
        type: Sequelize.INTEGER
      },
      deposit_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};