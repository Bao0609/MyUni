import express from 'express';
import { getSchool, postReviews } from '../controller/routes';
import { createAccount, login } from '../controller/auth'

const router = express.Router();

router.get('../controller/routes', getSchool);
router.post('../controller/auth', createAccount);
router.get('../controller/auth', login)
router.post('../controller/routes', postReviews);

export default router;