const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Order = require("./order");
const Shipper = sequelize.define("Shipper", {
  shipperID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  shipperName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Shipper.hasMany(Order, { foreignKey: "shipperID" });
Order.belongsTo(Shipper, { foreignKey: "shipperID" });

module.exports = Shipper;
