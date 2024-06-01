const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dpsi", "admin", "admin", {
  host: "localhost",
  dialect: "mysql",
});

// // Relasi antara model
// Customer.hasMany(Order, { foreignKey: "customerID" });
// Order.belongsTo(Customer, { foreignKey: "customerID" });

// Employee.hasMany(Order, { foreignKey: "employeeID" });
// Order.belongsTo(Employee, { foreignKey: "employeeID" });

// Shipper.hasMany(Order, { foreignKey: "shipperID" });
// Order.belongsTo(Shipper, { foreignKey: "shipperID" });

// Supplier.hasMany(Product, { foreignKey: "supplierID" });
// Products.belongsTo(Supplier, { foreignKey: "supplierID" });

// Category.hasMany(Product, { foreignKey: "categoryID" });
// Product.belongsTo(Category, { foreignKey: "categoryID" });

// Order.hasMany(OrderDetail, { foreignKey: "orderID" });
// OrderDetail.belongsTo(Order, { foreignKey: "orderID" });

// Product.hasMany(OrderDetail, { foreignKey: "productID" });
// OrderDetail.belongsTo(Product, { foreignKey: "productID" });

module.exports = sequelize;
