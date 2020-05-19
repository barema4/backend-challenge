"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imageThumbnail = _interopRequireDefault(require("image-thumbnail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Thumbnail {}

exports.default = Thumbnail;

_defineProperty(Thumbnail, "thumbnailGenerated", urlObj => {
  const options = {
    width: 50,
    height: 50,
    responseType: 'base64'
  };
  return (0, _imageThumbnail.default)(urlObj, options);
});