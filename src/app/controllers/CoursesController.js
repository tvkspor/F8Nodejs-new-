const Course = require("../modles/Course");
const { mongooseToObject } = require("../../ultil/mongoose");

class CoursesController {
  //Get:courses/detail
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((courses) => {
        res.render("courses/show", { courses });
      })
      .catch(next);
  }
  //Get:courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //Post:courses/sotre
  store(req, res, next) {
    req.body.image =
      "https://img.youtube.com/vi/" + req.body.videoId + "/sddefault.jpg";
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch((error) => {});
  }
  //GET /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //PUT /courses/:id/edit
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //Delete /courses/:id/delete
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //Delete /courses/:id/force delete
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //Restore /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  handleformAction(req,res,next){
    switch(req.body.action){
      case 'delete': 
      Course.delete({ _id: {$in: req.body.courseIds} })
      .then(() => res.redirect("back"))
      .catch(next);
      break;

      default:
        res.json({message:'action is invalid'})

    }
  }
}

module.exports = new CoursesController();
