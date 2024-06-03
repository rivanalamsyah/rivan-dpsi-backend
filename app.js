var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var sequelize = require("./models/index");
var usersRouter = require("./routes/users");
var productsRouter = require("./routes/products");
var categoriesRouter = require("./routes/categories");
var authRouter = require("./routes/auth");
var employeeRouter = require("./routes/employee")
var customerRouter = require("./routes/customer");
var orderRouter = require("./routes/order");
var orderDetailRouter = require("./routes/orderDetail");
var shipperRouter = require("./routes/shipper");

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/auth", authRouter);
app.use("/customer", customerRouter);
app.use("/employee", employeeRouter);
app.use("/order", orderRouter);
app.use("/orderDetail", orderDetailRouter);
app.use("/shipper", shipperRouter);

app.listen(3001, async () => {
  await sequelize
    .sync({
      force: true,
    })
    .then(() => {
      console.log("Database Berjalan");
    })
    .catch((err) => {
      console.error("Error synchronizing database:", err);
    });
  console.info("Server Berjalan");
});
