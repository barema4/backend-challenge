"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var JWT = _interopRequireWildcard(require("jsonwebtoken"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_dotenv.default.config();

class Jwt {}

exports.default = Jwt;

_defineProperty(Jwt, "signToken", userId => {
  const iat = new Date().getTime();
  const exp = new Date().setDate(new Date().getDate() + 1);
  const {
    JWT_SECRET,
    JWT_ISSUER
  } = process.env;
  const token = JWT.sign({
    iss: JWT_ISSUER,
    sub: userId,
    iat,
    exp
  }, JWT_SECRET);
  return {
    token,
    exp,
    iat
  };
});

_defineProperty(Jwt, "requireSignIn", (0, _expressJwt.default)({
  secret: process.env.JWT_SECRET,
  issuer: process.env.JWT_ISSUER,
  requestProperty: 'auth'
}));