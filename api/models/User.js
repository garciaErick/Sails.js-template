/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      email: true,
      unique: true,
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true,
    },
    passwordConfirmation: {
      type: 'string',
      required: true,
    },
    isAdmin: {
      type: 'bool',
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.isAdmin;
      delete obj.passwordConfirmation;
      delete obj._csrf;
      return obj;
    }
  },
};

