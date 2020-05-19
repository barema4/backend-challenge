"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var jsonPatch = _interopRequireWildcard(require("jsonpatch"));

var _expressValidator = require("express-validator");

var _UserModel = _interopRequireDefault(require("../models/UserModel"));

var _middleware = _interopRequireDefault(require("../middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PatchController {}

exports.default = PatchController;

_defineProperty(PatchController, "thePatch", []);

_defineProperty(PatchController, "patchUserData", (req, res) => {
  const {
    body
  } = req;
  const userKeys = Object.keys(_UserModel.default);
  const reqKeys = Object.keys(body);
  const errors = (0, _expressValidator.validationResult)(req);
  const possibleFields = ['userName', 'firstName', 'lastName', 'password', 'email'];

  if (!errors.isEmpty()) {
    return (0, _middleware.default)(req, res, errors);
  }

  reqKeys.forEach(key => {
    if (!possibleFields.includes(key)) {
      return res.status(400).send({
        message: `${key} is not among the acceptable fields`,
        possibleFields
      });
    }
  });
  reqKeys.forEach(key => {
    let dataObj;

    if (userKeys.includes(key)) {
      dataObj = {
        op: 'replace',
        path: `/${key}`,
        value: `${body[key]}`
      };
      PatchController.thePatch.push(dataObj);
    }

    dataObj = {
      op: 'add',
      path: `/${key}`,
      value: `${body[key]}`
    };
    PatchController.thePatch.push(dataObj);
  });
  const patchedDoc = jsonPatch.apply_patch(_UserModel.default, PatchController.thePatch);
  return res.status(200).send(patchedDoc);
});