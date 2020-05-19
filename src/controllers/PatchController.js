import * as jsonPatch from 'jsonpatch';
import { validationResult } from 'express-validator';
import user from '../models/UserModel';
import errorDisplay from '../middleware';

export default class PatchController {
  static thePatch = [];

  static patchUserData = (req, res) => {
    const { body } = req;
    const userKeys = Object.keys(user);
    const reqKeys = Object.keys(body);
    const errors = validationResult(req);
    const possibleFields = [
      'userName',
      'firstName',
      'lastName',
      'password',
      'email',
    ];

    if (!errors.isEmpty()) {
      return errorDisplay(req, res, errors);
    }

    reqKeys.forEach((key) => {
      if (!possibleFields.includes(key)) {
        return res.status(400).send({
          message: `${key} is not among the acceptable fields`,
          possibleFields,
        });
      }
    });

    reqKeys.forEach((key) => {
      let dataObj;
      if (userKeys.includes(key)) {
        dataObj = {
          op: 'replace',
          path: `/${key}`,
          value: `${body[key]}`,
        };
        this.thePatch.push(dataObj);
      }
      dataObj = { op: 'add', path: `/${key}`, value: `${body[key]}` };
      this.thePatch.push(dataObj);
    });
    const patchedDoc = jsonPatch.apply_patch(user, this.thePatch);

    return res.status(200).send(patchedDoc);
  };
}
