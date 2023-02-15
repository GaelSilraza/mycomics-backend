import express from 'express';
import UserController from './api/User/UserController';
import TagController from './api/Tag/TagController';
import FormatController from './api/Format/FormatController';
import GenreController from './api/Genre/GenreController';

const router = express.Router();

router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

router.get('/tag', TagController.index);
router.get('/tag/:id', TagController.show);
router.post('/tag', TagController.store);
router.put('/tag/:id', TagController.update);
router.delete('/tag/:id', TagController.delete);

router.get('/format', FormatController.index);
router.get('/format/:id', FormatController.show);
router.post('/format', FormatController.store);
router.put('/format/:id', FormatController.update);
router.delete('/format/:id', FormatController.delete);

router.get('/genre', GenreController.index);
router.get('/genre/:id', GenreController.show);
router.post('/genre', GenreController.store);
router.put('/genre/:id', GenreController.update);
router.delete('/genre/:id', GenreController.delete);

export { router };