const { Router } = require('express');
const { check } = require('express-validator');
const {
  userGet,
  userPut,
  userPost,
  userDelete,
} = require('../controllers/user.controller');
const { validatorEmail, thereUserById } = require('../helpers/db-validators');
const { fieldValidation } = require('../middlewares/field-validation');

const router = Router();

router.get('/getUsers', userGet);
router.put(
  '/:id',
  [
    check('id', 'is not a valid id').isMongoId(),
    check('id').custom(thereUserById),
    fieldValidation,
  ],
  userPut,
);
router.post(
  '/addUser',
  [
    check('email', 'email is not valid').isEmail(),
    check('email', 'email is not valid').custom(validatorEmail),
    check('name', 'name is requerid').not().isEmpty(),
    check(
      'pass',
      'the password is required and must be more than 6 letters long',
    )
      .isLength({ min: 6 })
      .not()
      .isEmpty(),
    fieldValidation,
  ],
  userPost,
);
router.delete(
  '/:id',
  [
    check('id', 'is not a valid id').isMongoId(),
    check('id').custom(thereUserById),
    fieldValidation,
  ],
  userDelete,
);

module.exports = router;
