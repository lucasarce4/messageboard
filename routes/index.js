var express = require('express');
var router = express.Router();
const moment = require('moment')

const messages = [
  {
    text: "My matress is too hard",
    user: "Rosy",
    added: moment().startOf('day').fromNow(),
  },
  {
    text: "I like furry animals",
    user: "Carlos",
    added: moment().startOf('hour').fromNow(),
  },
  {
    text: "What am I supposed to do now?",
    user: "Ricardo",
    added: moment().startOf('week').fromNow(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Leave a message!',messages: messages  });
});

router.post('/new',(req,res,next)=>{
  messages.unshift({
    text:req.body.message,
    user:req.body.name,
    added: moment().startOf('hour' - 1).fromNow(),
  })
  res.redirect('/')
})


module.exports = router;
