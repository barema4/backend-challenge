"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

const updateUserValidation = () => [(0, _expressValidator.body)('userName', 'You have submitted nothing for a new userName 🥴').trim().escape().optional().not().isEmpty(), (0, _expressValidator.body)('userName', 'userName should be in string format 🤥').optional().matches('^[a-z ]+$', 'i'), (0, _expressValidator.body)('firstName', 'You have submitted nothing for a new firstName 🥴').trim().escape().optional().not().isEmpty(), (0, _expressValidator.body)('firstName', 'firstName should be in string format 🤥').optional().matches('^[a-z ]+$', 'i'), (0, _expressValidator.body)('lastName', 'You have submitted nothing for a new lastName 🥴').trim().escape().optional().not().isEmpty(), (0, _expressValidator.body)('lastName', 'firstName should be in string format 🤥').optional().matches('^[a-z ]+$', 'i'), (0, _expressValidator.body)('password', 'You have submitted nothing for a new password 🥴').trim().escape().optional().isString().not().isEmpty(), (0, _expressValidator.body)('password', 'password should be in string format 🤥').optional().isString(), (0, _expressValidator.body)('email', 'Invalid email format').trim().optional().isEmail()];

var _default = updateUserValidation;
exports.default = _default;