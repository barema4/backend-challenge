import { body } from 'express-validator';

const loginValidations = () => [
  body('userName', 'userName is required')
    .trim()
    .escape()
    .exists()
    .not()
    .isEmpty(),
  body('password', 'Password is required')
    .trim()
    .escape()
    .exists()
    .not()
    .isEmpty(),
];

export default loginValidations;
