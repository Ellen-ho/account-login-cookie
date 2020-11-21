const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // 檢查 cookie 是否可以解析出 firstName
  if (req.signedCookies.user) {
    return res.redirect('/welcome')
  }

  return res.redirect('/login')
})

module.exports = router
