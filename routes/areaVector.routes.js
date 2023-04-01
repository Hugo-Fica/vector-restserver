const { Router } = require('express');
const { check } = require('express-validator');
const { validationJWT, fieldValidation } = require('../middlewares');
const {
  areaGets,
  areaPost,
  areaPut,
} = require('../controllers/areaVector.controller');

const areaVectorRouter = Router();

areaVectorRouter.get('/getAreaVector', validationJWT, areaGets);
areaVectorRouter.post('/addArea', [validationJWT, fieldValidation], areaPost);
areaVectorRouter.put(
  '/:id',
  [
    validationJWT,
    check('id', 'is not a valid id').isMongoId(),
    fieldValidation,
  ],
  areaPut,
);
module.exports = areaVectorRouter;
