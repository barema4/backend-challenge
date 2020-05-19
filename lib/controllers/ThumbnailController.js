"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _thumbnail = _interopRequireDefault(require("../utils/thumbnail"));

var _middleware = _interopRequireDefault(require("../middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ThumbnailController {}

exports.default = ThumbnailController;

_defineProperty(ThumbnailController, "generateThumbnail", async (req, res, next) => {
  const {
    publicImageUrl
  } = req.body;
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return (0, _middleware.default)(req, res, errors);
  }

  try {
    const thumbnail = await _thumbnail.default.thumbnailGenerated({
      uri: publicImageUrl
    });
    return res.status(200).send({
      generatedThumbnail: thumbnail
    });
  } catch (error) {
    next(error);
  }
});