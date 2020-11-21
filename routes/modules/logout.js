const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // 清除 cookie
  // res.clearCookie('user')
  // 清除 session
  delete req.session.user;
  return res.redirect('/login')
})

module.exports = router
