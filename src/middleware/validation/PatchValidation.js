import { body } from 'express-validator';

const updateUserValidation = () => [
  body('userName', 'You have submitted nothing for a new userName 🥴')
    .trim()
    .escape()
    .optional()
    .not()
    .isEmpty(),
  body('userName', 'userName should be in string format 🤥')
    .optional()
    .matches('^[a-z ]+$', 'i'),
  body('firstName', 'You have submitted nothing for a new firstName 🥴')
    .trim()
    .escape()
    .optional()
    .not()
    .isEmpty(),
  body('firstName', 'firstName should be in string format 🤥')
    .optional()
    .matches('^[a-z ]+$', 'i'),
  body('lastName', 'You have submitted nothing for a new lastName 🥴')
    .trim()
    .escape()
    .optional()
    .not()
    .isEmpty(),
  body('lastName', 'firstName should be in string format 🤥')
    .optional()
    .matches('^[a-z ]+$', 'i'),
  body('password', 'You have submitted nothing for a new password 🥴')
    .trim()
    .escape()
    .optional()
    .isString()
    .not()
    .isEmpty(),
  body('password', 'password should be in string format 🤥')
    .optional()
    .isString(),
  body('email', 'Invalid email format')
    .trim()
    .optional()
    .isEmail(),
];

export default updateUserValidation;