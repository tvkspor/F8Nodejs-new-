const loginRouter = require("./login");
const signupRouter = require("./signup");
const meRouter = require("./me");
const siteRouter = require("./site");
const coursesRouter = require("./courses");

function routes(app) {
  app.use("/login", loginRouter);
  app.use("/signup", signupRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}

module.exports = routes;
