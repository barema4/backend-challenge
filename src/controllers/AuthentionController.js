import { validationResult } from 'express-validator';
import user from '../models/UserModel';
import Jwt from '../utils/jwt';
import errorDisplay from '../middleware';

export default class AuthController {
  static userLogin = (req, res) => {
    const { userName, password } = req.body;
    const { userId } = user;
    const userDataValues = Object.values(user);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return errorDisplay(req, res, errors);
    }

    if (
      userDataValues.includes(userName) &&
      userDataValues.includes(password)
    ) {
      return res.status(200).send({
        userName,
        accessToken: Jwt.signToken(userId),
      });
    }

    return res.status(404).send({
      message: 'Wrong username or password',
    });
  };
}
