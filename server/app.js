const cookieParser = require("cookie-parser");
var express = require("express");
const path = require("path");
var app = express();

require("dotenv").config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === "production"
      ? ".env"
      : process.env.NODE_ENV === "development"
      ? ".env.dev"
      : process.env.NODE_ENV === "local"
      ? ".env.local"
      : " "
  ),
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const admin = require("./src/controller/AdminCT");

app.use("/admin", admin);

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(
    `Server is listening on ${port} \n NODE_ENV = ${process.env.NODE_ENV}`
  );
});

app.get("/", (req, res) => {
  res.send("Heating");
});
