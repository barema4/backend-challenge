"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _UserModel = _interopRequireDefault(require("../models/UserModel"));

var _jwt = _interopRequireDefault(require("../utils/jwt"));

var _middleware = _interopRequireDefault(require("../middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AuthController {}

exports.default = AuthController;

_defineProperty(AuthController, "userLogin", (req, res) => {
  const {
    userName,
    password
  } = req.body;
  const {
    userId
  } = _UserModel.default;
  const userDataValues = Object.values(_UserModel.default);
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return (0, _middleware.default)(req, res, errors);
  }

  if (userDataValues.includes(userName) && userDataValues.includes(password)) {
    return res.status(200).send({
      userName,
      accessToken: _jwt.default.signToken(userId)
    });
  }

  return res.status(404).send({
    message: 'Wrong username or password'
  });
});