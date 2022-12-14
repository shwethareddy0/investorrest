const express = require("express");
// const path = require('path');
const db = require("./config/connection");
const routes = require("./routes");
// var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "*",
    "Access-Control-Expose-Headers",
    "Access-Control-*",
    "Access-Control-Allow-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, HEAD",
    "Allow",
    "GET, POST, PUT, DELETE, OPTIONS, HEAD"
  );
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});
