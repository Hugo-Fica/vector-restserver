const User = require('../models/user.models');

const validatorEmail = async (email = '') => {
  const thereEmail = await User.findOne({ email });
  if (thereEmail) {
    throw new Error(`this email: '${email}' is already in use`);
  }
};
const thereUserById = async (id = '') => {
  const thereUser = await User.findOne({ id });
  if (thereUser) {
    throw new Error(`this id: '${id}' does not exist`);
  }
};
module.exports = {
  validatorEmail,
  thereUserById,
};
