const db = require("../models/index");
const sequelize = require('sequelize');

module.exports = {
    calculateTotalSum: async function () {
        const result = await db.Order.findAll({
            attributes: [
                [sequelize.fn('SUM', sequelize.col('total_price')), 'total'],
            ]
          });
    
        return result[0].dataValues.total;
    },
    calculateTotalSumByPayment: async function (payment) {
        const result = await db.Order.findAll({
            attributes: [
                [sequelize.fn('SUM', sequelize.col('total_price')), 'total'],
            ],
            where: {
                payment,
            },
          });
    
        return result[0].dataValues.total;
    },
  };