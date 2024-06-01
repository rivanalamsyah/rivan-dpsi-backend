const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const OrderDetail = require("./orderDetail");

const Order = sequelize.define("Order", {
  orderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employeeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  shipperID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Order.hasMany(OrderDetail, { foreignKey: "orderID" });
OrderDetail.belongsTo(Order, { foreignKey: "orderID" });

module.exports = Order;
