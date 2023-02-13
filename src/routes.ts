import express from 'express';
import UserController from './api/User/UserController';

const router = express.Router();

router.get('/user', UserController.index);
router.get('/user/:id', UserController.show)
router.post('/user', UserController.store)
router.put('/user/:id', UserController.update)
router.delete('/user/:id', UserController.delete)

export { router };