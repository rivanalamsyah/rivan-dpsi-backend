// models/product.js
const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const OrderDetail = require("./orderDetail");
const Products = sequelize.define("Product", {
  productID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supplierID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

Products.hasMany(OrderDetail, { foreignKey: "productID" });
OrderDetail.belongsTo(Products, { foreignKey: "productID" });

module.exports = Products;
