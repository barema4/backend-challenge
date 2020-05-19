"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

const loginValidations = () => [(0, _expressValidator.body)('userName', 'userName is required').trim().escape().exists().not().isEmpty(), (0, _expressValidator.body)('password', 'Password is required').trim().escape().exists().not().isEmpty()];

var _default = loginValidations;
exports.default = _default;