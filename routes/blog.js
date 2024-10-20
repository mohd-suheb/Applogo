

const express = require('express');
const router = express.Router();



//import controer
const {dummylink} = require("../controller/commentcontroller");
const {createcomment} = require("../controler/commentcontroller");
const {createpost} = require('../controller/postcontroller');





//mapping
router.get('/dummyroute', dummylink);
router.post('/comment/create', createcomment);
router.post('/posts/create', createpost);


//export
module.exports = router;