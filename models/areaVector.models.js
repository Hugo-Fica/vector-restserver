const { Schema, model } = require('mongoose');

const AreaVectorSchema = Schema({
  area: {
    type: String,
    required: [true, 'Area is required'],
  },
  position: {
    type: Number,
    required: [true, 'Position is requered'],
  },
  value: {
    type: Number,
    required: [true, 'Value is required'],
    default: 0,
  },
});
AreaVectorSchema.methods.toJSON = function () {
  const { __v, ...area } = this.toObject();
  return area;
};
module.exports = model('AreaVector', AreaVectorSchema);
