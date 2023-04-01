const { request, response } = require('express');
const { AreaVector } = require('../models');

const areaGets = async (req = request, res = response) => {
  const areas = await AreaVector.find();
  res.status(200).json({ areas });
};
const areaPost = async (req = request, res = response) => {
  const { value, position } = req.body;
  const area = req.body.area.toUpperCase();
  const data = {
    area,
    value,
    position,
  };
  const areaV = new AreaVector(data);
  await areaV.save();
  res.json({
    msg: 'Data saved correctly',
    areaV,
  });
};
const areaPut = async (req = request, res = response) => {
  const { id } = req.params;
  const { ...data } = req.body;
  data.area = data.area.toUpperCase();
  const area = await AreaVector.findByIdAndUpdate(id, data);
  res.json({
    msg: 'Correctly update data.',
    area,
  });
};
module.exports = {
  areaGets,
  areaPost,
  areaPut,
};
