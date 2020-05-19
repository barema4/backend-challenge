"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

const thumbnailUriValidation = () => [(0, _expressValidator.body)('publicImageUrl', 'publicImageUrl is required').trim().exists().not().isEmpty(), (0, _expressValidator.body)('publicImageUrl', 'Should be in a url format').isURL({
  protocols: ['http', 'https'],
  require_protocol: true
})];

var _default = thumbnailUriValidation;
exports.default = _default;