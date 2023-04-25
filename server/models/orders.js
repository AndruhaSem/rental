'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    place: DataTypes.STRING,
    time_rental: DataTypes.FLOAT,
    phone: DataTypes.BIGINT,
    total_price: DataTypes.INTEGER.UNSIGNED,
    quantity: DataTypes.INTEGER,
    payment: DataTypes.STRING,
    product: DataTypes.STRING,
    name: DataTypes.STRING,
    deposit: DataTypes.INTEGER,
    deposit_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return Orders;
};