const { NULL } = require("node-sass");
const Course = require("../modles/Course");
const { mutipleMongooseToObject } = require("../../ultil/mongoose");

class MeController {
  //Get /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) =>
        res.render("me/stored-courses", {
          deletedCount,
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  //Get /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .lean()
      .then((courses) => res.render("me/trash-courses", { courses }))
      .catch(next);
  }
}
module.exports = new MeController();
