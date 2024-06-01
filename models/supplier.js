const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Products = require("./products");
const Supplier = sequelize.define("Supplier", {
  supplierID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  supplierName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Supplier.hasMany(Products, { foreignKey: "supplierID" });
Products.belongsTo(Supplier, { foreignKey: "supplierID" });

module.exports = Supplier;
