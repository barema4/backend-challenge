
import { Router } from 'express';
import AuthController from '../controllers/AuthentionController';
import loginValidations from '../middleware/validation';

const router = Router();

router.post('/login', loginValidations(), AuthController.userLogin);

export default router;
