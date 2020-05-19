"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _server = _interopRequireDefault(require("./utils/server"));

var _UserRoutes = _interopRequireDefault(require("./routes/UserRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = 8000;

_server.default.get('/', (req, res) => {
  res.status(200).send({
    message: 'Hackerbay.io backend challenge 😎'
  });
});

_server.default.use(_UserRoutes.default);

_server.default.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    console.log(err.name);
    res.status(401).send({
      UnauthorizedError: err.message
    });
  }

  next();
});

_server.default.server = _server.default.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
const {
  server
} = _server.default;
var _default = server;
exports.default = _default;