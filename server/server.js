// Require express, cors, axios
const express = require("express");
var cors = require("cors");
var axios = require("axios");
// const path = require('path');
const db = require("./config/connection");
const routes = require("./routes");
// var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const config = {
  headers: {
    "x-api-key": "ec5fbc97-8313-4c5d-ac09-3e59940a364b",
  },
};
//Handler for cors method
const handleCors = async (req, res, next) => {
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
  const response = await axios.get(req.query.url, config);
  res.json(response.data);
};

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

app.get("/cors", handleCors);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});
