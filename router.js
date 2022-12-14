const Router = require('express');
const verifyBlackList = require('./middleware/verifyBlackList');
const verifyJWT = require('./middleware/verifyJWT');

const router = Router();

router.get('/partial-providers', require('./controllers/partialProvidersController'));
router.post('/auth', require('./controllers/loginController'));
router.get('/logout', require('./controllers/logoutController'));
router.get('/full-providers', verifyJWT, require('./controllers/fullProvidersController'));
router.get('/refresh', verifyBlackList, require('./controllers/handleRefreshController'));
router.post('/register', require('./controllers/registerController'));
router.post('/sendMsg', require('./controllers/msgController'));

module.exports = router;
