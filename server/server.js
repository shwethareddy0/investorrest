const express = require("express");
var axios = require("axios");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const config = {
  headers: {
    "x-api-key": "ec5fbc97-8313-4c5d-ac09-3e59940a364b",
  },
};
//Handler for getResults method
const handleGetResults = async (req, res, next) => {
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

app.get("/getResults", handleGetResults);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});
