'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Money extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Money.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    payment: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    time_rental: DataTypes.FLOAT,
    place: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Money',
    tableName: 'money'
  });
  return Money;
};