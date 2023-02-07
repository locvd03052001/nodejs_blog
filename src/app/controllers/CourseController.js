const Course = require('../models/Courses');
const { mongooseToObject } = require('../../ultil/mongooese');

class CourseController {
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
