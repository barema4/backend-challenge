
import { Router } from 'express';
import AuthController from '../controllers/AuthentionController';
import loginValidations from '../middleware/validation';
import PatchController from '../controllers/PatchController';
import Jwt from '../utils/jwt';

const router = Router();

router.post('/login', loginValidations(), AuthController.userLogin);
router.patch('/update', Jwt.requireSignIn, PatchController.patchUserData);
export default router;
