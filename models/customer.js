const { DataTypes } = require("sequelize");
var sequelize = require("./index");
const Order = require("./order");

var Customer = sequelize.define("Customer", {
  customerID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerName: {
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
});

Customer.hasMany(Order, { foreignKey: "customerID" });
Order.belongsTo(Customer, { foreignKey: "customerID" });

module.exports = Customer;
