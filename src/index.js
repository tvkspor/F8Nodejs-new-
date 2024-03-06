const express = require("express");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");
const hb = require("handlebars");
hb.registerHelper("sum", function (a, b) {
  return parseInt(a) + parseInt(b);
});

//connect db
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride("_method"));
//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
