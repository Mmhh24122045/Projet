const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const product = require("./routes/product");
const contactNous = require("./routes/contactNous");

const app = express();
app.use(express.json());
app.use("/user", user);

app.use("/product", product);
app.use("/contactNous", contactNous); 

connectDB();

app.listen(5000, (err) =>
  err ? console.error(err) : console.log("Server running on port 5000")
);
