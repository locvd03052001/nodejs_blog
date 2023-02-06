const Course = require('../models/Courses');
const { mutipleMongooseToObject } = require('../../ultil/mongooese');

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch((error) => next(error));
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
