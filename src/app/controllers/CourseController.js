const Course = require('../models/Courses');
const { mongooseToObject } = require('../../ultil/mongooese');

class CourseController {
  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formDate = req.body;
    formDate.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formDate);

    course
      .save()
      .then(() => res.redirect(`/`))
      .catch((error) => {});
  }

  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/show', {
          course: mongooseToObject(course),
        }),
      )
      .catch((error) => next(error));
  }
}

module.exports = new CourseController();
