const LogIn = require("../modles/logIn");

class LoginController {
  login(req, res) {
    res.render("login");
  }

  async check(req, res,next){
    try {
      const check = await LogIn.findOne({ name: req.body.name })

      if (check.password === req.body.password) {
          res.send("Dang nhap thanh cong")
      }
      else {
          res.send("incorrect password")
      }
  }  
  catch (e) {
    res.send("wrong details")
}

}
}
module.exports = new LoginController();
