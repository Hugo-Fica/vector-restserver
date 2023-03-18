const User = require('../models/user.models');
const Role = require('../models/role.models');

const validatorRole = async (role = '') => {
  const thereRole = await Role.findOne({ role });
  if (!thereRole) {
    throw new Error(`this role '${role}' is not registered in the DB`);
  }
};

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
  validatorRole,
  validatorEmail,
  thereUserById,
};
