const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  pass: {
    type: String,
    required: [true, 'Password is required'],
  },
  state: {
    type: Boolean,
    default: true,
  },
});
UserSchema.methods.toJSON = function () {
  const { __v, pass, ...user } = this.toObject();
  return user;
};
module.exports = model('User', UserSchema);
