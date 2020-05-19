
import { Router } from 'express';
import AuthController from '../controllers/AuthentionController';
import loginValidations from '../middleware/validation/LoginValidation';
import PatchController from '../controllers/PatchController';
import Jwt from '../utils/jwt';
import ThumbnailController from '../controllers/ThumbnailController';
import thumbnailUriValidation from '../middleware/validation/ThumbaValidation';
import updateUserValidation from '../middleware/validation/PatchValidation';

const router = Router();

router.post('/login', loginValidations(), AuthController.userLogin);
router.patch(
  '/update',
  Jwt.requireSignIn,
  updateUserValidation(),
  PatchController.patchUserData,
);
router.post(
  '/generate-thumbnail',
  Jwt.requireSignIn,
  thumbnailUriValidation(),
  ThumbnailController.generateThumbnail,
);

export default router;
