const express = require('express');
const router = express.Router();
const birdsController = require('../controllers/birdsControllers');
const usersController = require('../controllers/usersControllers');

router.get('/', birdsController.getAll);
router.get('/birds/:id/view', birdsController.viewBird);
router.get('/birds/new', birdsController.getNewBird);
router.post('/birds/new', birdsController.postNew);
router.get('/birds/:id/edit', birdsController.getEditBird);
router.post('/birds/:id/edit', birdsController.postEdit);
router.post('/birds/:id/delete', birdsController.deleteBird);
router.get('/users/register', usersController.getNewUser);
router.post('/users/register', usersController.registerUser);
router.get('/users/login', usersController.getLoginUser);
router.post('/users/login', usersController.loginUser);

module.exports = router;