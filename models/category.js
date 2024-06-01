// models/category.js
var sequelize = require("./index");
const { DataTypes } = require("sequelize");
const Products = require("./products");

const Category = sequelize.define("Category", {
  categoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Category.hasMany(Products, { foreignKey: "categoryID" });
Products.belongsTo(Category, { foreignKey: "categoryID" });

module.exports = Category;
