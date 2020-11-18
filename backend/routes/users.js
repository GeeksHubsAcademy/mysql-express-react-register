const router = require('express').Router();
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.get('/', UserController.getAll)
router.get('/profile', auth, UserController.profile)
router.post('/signup', UserController.signup)
router.post('/login', UserController.login)

module.exports = router;