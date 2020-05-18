import * as jsonPatch from 'jsonpatch';
import user from '../models/UserModel';

export default class PatchController {
  static patchUserData = (req, res) => {
    const { body } = req;
    const userKeys = Object.keys(user);
    const reqKeys = Object.keys(body);
    const thePatch = [];

    reqKeys.forEach((key) => {
      let dataObj;
      if (userKeys.includes(key)) {
        dataObj = {
          op: "replace", path: `/${key}`, value: `${body[key]}`,
        };
        thePatch.push(dataObj);
      }
      dataObj = { op: "add", path: `/${key}`, value: `${body[key]}` };
      thePatch.push(dataObj);
    });
    const patchedDoc = jsonPatch.apply_patch(user, thePatch);

    return res.status(200).send(patchedDoc);
  }
}
