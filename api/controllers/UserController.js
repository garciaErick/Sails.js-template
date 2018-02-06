/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'new': function (req, res) {
    res.view();
  },

  create: function (req, res, next) {
    User.create(req.params.all(), function userCreated(err, user) {
      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        };
        // If error redirect back to create page
        return res.redirect('/user/new');
      }
      return res.redirect('/user/show/' + user.id);
    });
  },

  'show': function (req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  'index': function (req, res, next) {
    // Get an array of all users in the User collection(e.g. table)
    User.find(function foundUsers(err, users) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      res.view({
        users: users
      });
    });
  },

  edit: function (req, res, next) {

    // Find the user from the id passed in via params
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next('User doesn\'t exist.');

      res.view({
        user: user
      });
    });
  },

  'update': function (req, res, next) {

    // if (req.session.User.admin) {
    var userObj = {
      firstName: req.param('firstName'),
      lastName: req.param('lastName'),
      email: req.param('email'),
      admin: req.param('isAdmin')
    };
    // } else {
    //   var userObj = {
    //     name: req.param('name'),
    //     title: req.param('title'),
    //     email: req.param('email')
    //   }
    // }

    User.update(req.param('id'), userObj, function userUpdated(err) {
      if (err) {
        return res.redirect('/user/edit/' + req.param('id'));
      }

      res.redirect('/user/show/' + req.param('id'));
    });
  },
};
