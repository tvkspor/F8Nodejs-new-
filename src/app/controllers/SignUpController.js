const signUp = require("../modles/logIn");

class signUpController {
  signUp(req, res) {
    res.render("signup");
  }

  store(req, res, next) {
    const signup = new signUp(req.body);
    signup
      .save()
      .then(() => res.redirect("back"))
      .catch((error) => {});
  }

}
module.exports = new signUpController();
