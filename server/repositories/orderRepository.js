const db = require("../models/index");
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');

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
    calculateTotalByUserId: async function (userId) {
        const result = await db.sequelize.query(`SELECT (
            (SELECT products_count FROM users WHERE id = ${userId}) /
            (SELECT SUM(products_count) FROM users) * 
            SUM(total_price)
        ) as user_total FROM orders`, { raw: true, type: QueryTypes.SELECT });

        return result[0].user_total;
    }
  };