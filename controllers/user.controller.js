const { response, request } = require('express');

const userGet = (req = request, res = response) => {
  const { name = 'no name', email = 'no email' } = req.query;
  res.json({
    msg: 'get APi - controller',
    name,
    email,
  });
};
const userPut = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    msg: 'put APi - controller',
    id,
  });
};
const userPost = (req = request, res = response) => {
  const { name, email, pass } = req.body;
  res.json({
    msg: 'user successfully added',
    name,
    email,
    pass,
  });
};
const userDelete = (req = request, res = response) => {
  res.json({
    msg: 'delete APi - controller',
  });
};

module.exports = {
  userGet,
  userPut,
  userPost,
  userDelete,
};
