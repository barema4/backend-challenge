"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const errorDisplay = (req, res, errors) => {
  const errorArr = [];
  errors.array().forEach(error => {
    const errData = {
      status: 422,
      message: error.msg,
      field: error.param
    };
    errorArr.push(errData);
  });
  return res.status(422).send({
    error: errorArr
  });
};

var _default = errorDisplay;
exports.default = _default;