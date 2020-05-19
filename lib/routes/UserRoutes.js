"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthentionController = _interopRequireDefault(require("../controllers/AuthentionController"));

var _LoginValidation = _interopRequireDefault(require("../middleware/validation/LoginValidation"));

var _PatchController = _interopRequireDefault(require("../controllers/PatchController"));

var _jwt = _interopRequireDefault(require("../utils/jwt"));

var _ThumbnailController = _interopRequireDefault(require("../controllers/ThumbnailController"));

var _ThumbaValidation = _interopRequireDefault(require("../middleware/validation/ThumbaValidation"));

var _PatchValidation = _interopRequireDefault(require("../middleware/validation/PatchValidation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/login', (0, _LoginValidation.default)(), _AuthentionController.default.userLogin);
router.patch('/update', _jwt.default.requireSignIn, (0, _PatchValidation.default)(), _PatchController.default.patchUserData);
router.post('/generate-thumbnail', _jwt.default.requireSignIn, (0, _ThumbaValidation.default)(), _ThumbnailController.default.generateThumbnail);
var _default = router;
exports.default = _default;