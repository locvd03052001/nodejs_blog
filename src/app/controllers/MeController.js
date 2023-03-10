const Course = require('../models/Courses');
const { mutipleMongooseToObject } = require('../../ultil/mongooese');

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch((error) => next(error));
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch((error) => next(error));
  }
}

module.exports = new MeController();
