const express = require("express");
const router = express.Router();


router.get('/chats', function(req, res){ 
    res.render('chats', { title: 'Hey', message: 'Hello there!', css : "chats.css", js:"chats.js" }); 
});
router.get('/login', function(req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!', css : "login.css", js:"login.js" });
});
router.get('/test', function(req, res){ res.render('test'); });
module.exports = router;