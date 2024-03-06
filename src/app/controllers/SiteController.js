const Course = require("../modles/Course");

class SiteController {
  async index(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => res.render("home", { courses }))
      .catch(next);
  }

  search(req, res) {
    console.log('aaaa');
    res.render("search");
  }
}
module.exports = new SiteController();
